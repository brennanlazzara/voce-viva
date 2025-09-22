import mongoose, { Document, Schema } from "mongoose";

export interface IVerb extends Document {
  infinitive: string;
  type: "are" | "ere" | "ire";
  definition: string;
  auxiliaryVerb: "avere" | "essere";
  regularPresenteIndicativo: boolean;
  regularPassatoProssimo: boolean;
  conjugations?: {
    presenteIndicativo?: {
      io: string;
      tu: string;
      luiLei: string;
      noi: string;
      voi: string;
      loro: string;
    };
    imperfetto?: {
      io: string;
      tu: string;
      luiLei: string;
      noi: string;
      voi: string;
      loro: string;
    };
  };
}

const VerbSchema = new mongoose.Schema({
  infinitive: { type: String, required: true },
  type: { type: String, required: true },
  definition: { type: String, required: true },
  auxiliaryVerb: { type: String, enum: ["avere", "essere"], required: true },
  regularPresenteIndicativo: { type: Boolean, required: true },
  regularPassatoProssimo: { type: Boolean, required: true },
  conjugations: {
    type: mongoose.Schema.Types.Mixed,
    required: false
  }
});

// Prevent model re-compilation error in development
export default mongoose.models.Verb || mongoose.model<IVerb>("Verb", VerbSchema, "verbs");