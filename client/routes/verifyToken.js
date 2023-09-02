import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;

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

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
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
