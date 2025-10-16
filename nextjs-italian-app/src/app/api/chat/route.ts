import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // System prompt tailored for Italian language learning
    const systemPrompt = `You are an expert Italian language tutor integrated into VoceViva, an Italian learning application. Your role is to help students learn Italian through:

1. **Grammar & Conjugations**: Explain verb conjugations, tenses (presente, passato prossimo, imperfetto, futuro semplice), moods (indicativo, congiuntivo, condizionale), and grammatical rules clearly.

2. **Translation Help**: Translate between Italian and English accurately, explaining nuances and context.

3. **General Italian Questions**: Answer questions about Italian culture, idioms, common expressions, and usage.

4. **Practice Support**: Help students understand their mistakes, provide examples, and encourage learning.

Keep your responses:
- Clear and concise
- Educational and encouraging
- Formatted with examples when helpful
- Focused on practical usage

When explaining conjugations, use clear formatting and provide examples in context.`;

    // Create streaming response
    const stream = await anthropic.messages.stream({
      model: "claude-3-5-sonnet-20241022",
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages,
    });

    // Convert Anthropic stream to web ReadableStream
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of stream) {
            if (
              chunk.type === "content_block_delta" &&
              chunk.delta.type === "text_delta"
            ) {
              const text = chunk.delta.text;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Failed to process chat request" },
      { status: 500 }
    );
  }
}
