import express from "express";
import mongoose from "mongoose";
//import { User } from "./model/User";
import { userRoute } from "./routes/user.js";
import residenceRoute from "./routes/recidence.js";
import { authroute } from "./routes/auth.js";
import { bookingRoute } from "./routes/booking.js";
import cookieParser from "cookie-parser";
//import cookieSession from "cookie-session";
import { config } from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

config();
const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
// app.use(
//   cookieSession({
//     name: "session",
//     sameSite: "none",
//     secure: true,
//   })
// );
app.use(
  cors({
    origin: "http://localhost:5173", //FrontEnd URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

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
app.use("/app/booking", bookingRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("server is connected");
});
