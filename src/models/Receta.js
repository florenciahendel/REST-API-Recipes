import { Schema, model } from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'
const recetaSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    ingredients: { type: String, required: true, trim: true },
    procedure: { type: String, required: true, trim: true },
    time: { type: Number, required: true },
  },
  { versionkey: false, timestamps: true }
);
recetaSchema.plugin(mongoosePaginate)
export default model("Receta", recetaSchema);
