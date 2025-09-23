import mongoose, { Document } from "mongoose";

export interface ILesson extends Document {
  type: "regular" | "irregular";
  infinitive?: string; // For irregular verbs, null for regular lesson
  tense: string; // "presenteIndicativo", "passatoProssimo", etc.
  patternExplanation?: string; // For regular verbs
  etymology?: string; // For irregular verbs
  memoryTricks: string[];
  commonPhrases: string[];
  learnerPitfalls: string[];
  conjugationExamples?: {
    are?: { stem: string; infinitive: string; conjugations: string[] };
    ere?: { stem: string; infinitive: string; conjugations: string[] };
    ire?: { stem: string; infinitive: string; conjugations: string[] };
  }; // For regular verbs only
}

const LessonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["regular", "irregular"],
    required: true
  },
  infinitive: {
    type: String,
    required: false // Only required for irregular verbs
  },
  tense: {
    type: String,
    required: true
  },
  patternExplanation: {
    type: String,
    required: false // Only for regular verbs
  },
  etymology: {
    type: String,
    required: false // Only for irregular verbs
  },
  memoryTricks: [{
    type: String,
    required: true
  }],
  commonPhrases: [{
    type: String,
    required: true
  }],
  learnerPitfalls: [{
    type: String,
    required: true
  }],
  conjugationExamples: {
    type: mongoose.Schema.Types.Mixed,
    required: false // Only for regular verbs
  }
});

// Prevent model re-compilation error in development
export default mongoose.models.Lesson || mongoose.model<ILesson>("Lesson", LessonSchema, "lessons");