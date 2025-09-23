import mongoose, { Document } from "mongoose";

export interface IPronoun extends Document {
  type: 'subject' | 'directObject' | 'indirectObject';
  pronouns: string[];
}

const pronounSchema = new mongoose.Schema({
  type: { type: String, required: true },
  pronouns: { type: [String], required: true },
});

// Prevent model re-compilation error in development
export default mongoose.models.Pronoun || mongoose.model<IPronoun>("Pronoun", pronounSchema, "pronouns");