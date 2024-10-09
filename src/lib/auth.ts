import jwt from "jsonwebtoken";
import User from "@/models/user";
import connectToDatabase from "./db";

export const getUserFromToken = async (token: string) => {
  if (!token) {
    return null;
  }

  try {
    await connectToDatabase();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId);

    if (!user) {
      return null;
    }

    return { userId: user._id, username: user.username };
  } catch (err) {
    return null;
  }
};
