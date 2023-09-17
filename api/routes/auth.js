import express from "express";
import { User } from "../model/User.js";
import bcryptjs from "bcryptjs";
//import { verifyToken } from "./verifyToken.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
import { verifyAdmin, verifyToken, verifyUser } from "./verifyToken.js";
//import cookieParser from "cookie-parser";
const router = express.Router();
//console.log(process.env.JWT_SEC);
//register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    //all data are compulsory
    if (!(username && email && password)) {
      res.json({
        error: "All fileds are complusory",
      });
    }
    //check if user already exist
    const user = await User.findOne({ email });
    if (user) {
      res.json({
        error: "user alredy exist please login",
      });
    } else {
      const salt = await bcryptjs.genSalt(10);
      const hashPassword = await bcryptjs.hash(password, salt);

      const user = await User.create({
        username,
        email,
        password: hashPassword,
      });

      //generate a token for user and send it
      const token = jwt.sign({ id: user._id, email }, process.env.JWT_SEC, {
        expiresIn: "3d",
      });

      user.Token = token;
      user.password = undefined;

      res.json({ user, token }).status(200);
    }
  } catch (er) {
    console.log(er);
    res.status(500).json("User not registered");
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //find User in DB
    const user = await User.findOne({ email });
    if (!user) {
      res.json({
        error: "User Does not exist",
      });
    }

    //match password

    const matchPassword = await bcryptjs.compare(password, user.password);

    if (!matchPassword) {
      res.json({
        error: "Incorrect Password",
      });
    }

    //response
    if (user && matchPassword) {
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT_SEC,
        {
          expiresIn: "3d",
        }
      );
      user.token = token;
      user.password = undefined;

      //cookie section
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.status(200).cookie("token", token, options).json({
        success: true,
        token,
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

// router.get("/checkautehtication", verifyToken, (req, res, next) => {
//   res.send("Hello user,You are Logged in");
// });
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user,You are Logged in and you can delete your account");
// });
// router.get("/checkAdmin", verifyAdmin, (req, res, next) => {
//   res.send("Hello user,You are Logged in and you can delete all user accounts");
// });

router.post("/logout", (req, res) => {
  res.cookie("token", null, {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(200).json({ success: true, message: "Successfully loged out" });
});

export { router as authroute };
