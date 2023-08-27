import mongoose from "mongoose";

const Residency = new mongoose.Schema({
  title: String,
  address: String,
  description: String,
  price: Number,
  city: String,
  country: String,
  image: String,
  facilities: Array,
});

export const ResidencyModle = mongoose.model("residency", Residency);
