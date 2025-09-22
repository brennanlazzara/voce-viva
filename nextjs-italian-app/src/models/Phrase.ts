import mongoose, { Document, Schema } from "mongoose";

export interface IPhrase extends Document {
  phrase: string;
  translation: string;
  meaning: string;
}

const phraseSchema: Schema = new Schema({
  phrase: { type: String, required: true },
  translation: { type: String, required: true },
  meaning: { type: String, required: true },
});

// Prevent model re-compilation error in development
export default mongoose.models.Phrase || mongoose.model<IPhrase>("Phrase", phraseSchema, "phrases");