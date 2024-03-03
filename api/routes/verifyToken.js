import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const verifyToken = (req, res, next) => {
  // console.log(process.env.JWT_SEC);
  const token = req.headers.cookie;
  console.log(token);

  if (!token) {
    return next(console.log(401, "you are not authenticated"));
  }
  jwt.verify(token, process.env.JWT_SEC, (err, user) => {
    if (err) {
      res.status(403).json("Token is not valid");
    }
    req.user = user; //assign user to request if everything is OK.
    next();
  });
};

// const GetAuthToken = (req, res, next) => {
//   // console.log(process.env.JWT_SEC);
//   const token = req.headers.Autherisation;
//   console.log(token);

//   if (!token) {
//     return console.log(401, "you are not authenticated");
//   }
//   jwt.verify(token, process.env.JWT_SEC, (err, user) => {
//     if (err) {
//       res.status(403).json("Token is not valid");
//     }
//     req.user = user; //assign user to request if everything is OK.
//     next();
//   });
// };

const verifyUser = async (req, res, next) => {
  await verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      if (err) return next(console.log(403, "you are not authorized!"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      if (err) return next(console.log(403, "you are not authorized!"));
    }
  });
};

export { verifyToken, verifyUser, verifyAdmin };
