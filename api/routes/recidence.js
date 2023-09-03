import express from "express";
import { ResidencyModle } from "../model/Residence.js";
import { verifyAdmin } from "./verifyToken.js";

const router = express.Router();

//adding data
router.post("/addResidence", verifyAdmin, async (req, res) => {
  const {
    title,
    address,
    description,
    price,
    city,
    country,
    image,
    facilities,
  } = req.body;

  const createRes = await ResidencyModle.create({
    title,
    address,
    description,
    price,
    city,
    country,
    image,
    facilities,
  });

  res.json(createRes).status(200);
});

//getting all data

router.get("/Residence", async (req, res) => {
  try {
    const createRes = await ResidencyModle.find();
    res.json(createRes).status(200);
  } catch (error) {
    console.log("error in finding");
  }
});

//getting a single product
router.get("/Residence/:id", async (req, res) => {
  try {
    const residence = await ResidencyModle.findById(req.params.id);
    res.json(residence).status(200);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
});

//Update
router.put("/Residence/:id", verifyAdmin, async (req, res) => {
  try {
    const updateHotel = await ResidencyModle.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateHotel);
  } catch (error) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/Residence/:id", verifyAdmin, async (req, res) => {
  try {
    await ResidencyModle.findByIdAndDelete(req.params.id);
    res.status(200).json("hotel deleted");
  } catch (error) {
    res.status(500).json(err);
  }
});

export default router;
