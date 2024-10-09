import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import User from "@/models/user";
import { getUserFromToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const { userId } = await request.json();
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userFromToken = await getUserFromToken(token);

  if (!userFromToken || !userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch the user from the database to get a Mongoose document
  const user = await User.findById(userFromToken.userId);
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  // Ensure the following property is initialized
  if (!Array.isArray(user.following)) {
    user.following = [];
  }

  try {
    const targetUser = await User.findById(userId);
    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isFollowed = targetUser.followers.includes(user.userId);

    if (isFollowed) {
      targetUser.followers = targetUser.followers.filter(
        (follower: string) => follower.toString() !== user.userId.toString(),
      );

      user.following = user.following.filter(
        (following: string) =>
          following.toString() !== targetUser._id.toString(),
      );
    } else {
      targetUser.followers.push(user.userId);
      user.following.push(targetUser._id);
    }

    await targetUser.save();
    await user.save();

    return NextResponse.json({ targetUser, user }, { status: 200 });
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
