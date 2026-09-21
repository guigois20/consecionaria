import { model, Model, Schema } from "mongoose";

const placemodel = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "user" },
  modelo: String,
  cidade: String,
  placa: { type: String, unique: true },
  km: Number,
  cor: String,
  comprador: String,
  refcomprador: String,
  dtcomp: Date,
  vlcomp: Number,
  vendida: String,
  refvendida: String,
  dtvend: Date,
  vlvend: Number,
  photos: [String],
  jogoderoda: Boolean,
});

export default model("place", placemodel);
