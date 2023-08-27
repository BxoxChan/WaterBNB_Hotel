import express from "express";
const router = express.Router();
import { User } from "../model/User.js";

router.post("/add", async (req, res) => {
  const { username, password, email } = req.body;
  const newUser = await User.create({
    username,
    password,
    email,
  });
  res.json(newUser).status(200);
});

export { router as userRoute };
