import express from "express";
import { ResidencyModle } from "../model/Residence.js";

const router = express.Router();

//adding data
router.post("/addResidence", async (req, res) => {
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
  //   const {
  //     title,
  //     address,
  //     description,
  //     price,
  //     city,
  //     country,
  //     image,
  //     facilities,
  //   } = req.body;

  const createRes = await ResidencyModle.find();
  res.json(createRes).status(200);
});

export default router;
