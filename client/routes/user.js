import express from "express";
const router = express.Router();
import { User } from "../model/User.js";
import { verifyAdmin, verifyToken, verifyUser } from "./verifyToken.js";

//get
router.get("/:id", verifyUser, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.json(user);
    next(err);
  }
});

//getall
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (e) {
    res.status(400);
    console.log(e);
  }
});

//update
router.put("/:id", verifyUser, async (req, res, next) => {
  try {
    const Updateduser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(Updateduser);
  } catch (error) {
    next(err);
  }
});

//delete

router.delete("/id", verifyUser, async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (error) {
    next(err);
  }
});
export { router as userRoute };
