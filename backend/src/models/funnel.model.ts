import mongoose, { Schema, Document } from "mongoose";

export interface IFunnel extends Document {
  prompt: string;
  funnel: string;
  createdAt: Date;
}

const FunnelSchema: Schema = new Schema({
  prompt: { type: String, required: true },
  funnel: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Funnel = mongoose.model<IFunnel>("Funnel", FunnelSchema);
