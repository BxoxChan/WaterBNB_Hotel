import express from "express";
import mongoose from "mongoose";
//import { User } from "./model/User";
import { userRoute } from "./routes/user.js";
import residenceRoute from "./routes/recidence.js";
import { authroute } from "./routes/auth.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";

config();
const app = express();
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/app/user", userRoute);
app.use("/app/residence", residenceRoute);
app.use("/app/auth", authroute);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is connected");
});
