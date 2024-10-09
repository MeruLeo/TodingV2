import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "@/models/user";
import connectToDatabase from "@/lib/db";

export async function POST(req: NextRequest) {
  await connectToDatabase();

  const { email, password } = await req.json();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 },
      );
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return NextResponse.json({ msg: "Login successfully.", token });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
