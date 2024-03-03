import express from "express";
import { verifyToken, verifyUser } from "./verifyToken.js";
import { Booking } from "../model/Booking.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const router = express.Router();

//router.use(verifyToken);
router.use(cookieParser());

router.post("/", async (req, res) => {
  try {
    const {
      place,
      checkIn,
      checkOut,
      username,
      guests,
      phone,
      price,
      numberOfNights,
      totalPrice,
    } = req.body;
    const userData = req.body.user;

    const createBooking = await Booking.create({
      user: userData,
      place,
      checkIn,
      checkOut,
      guests,
      phone,
      price,
      numberOfNights,
      username,
      totalPrice,
    });

    console.log("booked");
    res
      .json({
        createBooking,
        message: "Booked",
        success: true,
      })
      .status(200);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Not Booked,BOoking ERROR!",
      error: e,
    });
  }
});

//view booking
// router.get("/booked", async (req, res) => {
//   try {
//     //  const { token } = req.cookies;
//     //  const userData = jwt.verify(token, process.env.JWT_SEC);

//     const userData = req.user;
//     console.log(userData);
//     if (!userData) {
//       res
//         .status(401)
//         .json({ error: "You are not authorized to access this page" });
//     }
//     const bookingRes = await Booking.find({ user: userData._id });
//     console.log(user);
//     res.json(200).json({ bookingRes, success: true });
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal server Error",
//       err: "err",
//     });
//   }
// });

router.get("/booked", async (req, res) => {
  try {
    //  const { token } = req.cookies;
    //  const userData = jwt.verify(token, process.env.JWT_SEC);

    // console.log(userData);
    // if (!userData) {
    //   res
    //     .status(401)
    //     .json({ error: "You are not authorized to access this page" });
    // }
    const bookingRes = await Booking.find().populate("place");
    //console.log(bookingRes);
    res.status(200).json({ bookingRes, success: true });
  } catch {
    (e) =>
      res.status(500).json({
        message: "Internal server Error",
        err: e,
      });
  }
});

// Delete

router.delete("/delete", verifyUser, async (req, res) => {
  try {
    await Booking.findByIdAndDelete;
  } catch (error) {
    console.log(error);
  }
});

export { router as bookingRoute };
