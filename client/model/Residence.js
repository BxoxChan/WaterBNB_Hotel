import mongoose from "mongoose";

const Residency = new mongoose.Schema(
  {
    title: { type: String, required: true },
    address: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    image: { type: String, required: true },
    facilities: { type: Array, required: true },
  },
  { timestamps: true }
);

export const ResidencyModle = mongoose.model("residency", Residency);
