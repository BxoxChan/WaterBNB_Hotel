import express from "express";
import mongoose from "mongoose";
//import { User } from "./model/User";
import { userRoute } from "./routes/user.js";
import residenceRoute from "./routes/recidence.js";

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://admin1:admin123@cluster0.7raknro.mongodb.net/")
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/app/user", userRoute);
app.use("/app/residence", residenceRoute);

app.listen(5000, () => {
  console.log("server is connected");
});
