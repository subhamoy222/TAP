//Purpose: To authenticate users by verifying their JWT token and attaching the user information to the request.
//How It Works:
//Check for Token: Looks for a JWT in the request cookies.
//Verify Token: Checks if the token is valid using a secret key.
//Attach User: Finds the user from the database based on the token's payload and attaches the user to the request.
//Proceed: Allows the request to continue to the next middleware or route handler if authentication is successful.



import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from './catchAsyncError.js';



import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErrorHandler("User Not Authorized", 401));
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decoded.id);

  next();
});






