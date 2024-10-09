import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Tweet from "@/models/tweet";
import { getUserFromToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const { tweetId } = await request.json();
  const token = request.cookies.get("token");
  const user = await getUserFromToken(token?.value);

  if (!user || !tweetId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const tweet = await Tweet.findById(tweetId);
    if (!tweet) {
      return NextResponse.json({ error: "Tweet not found" }, { status: 404 });
    }

    const isLiked = tweet.likes.includes(user.userId);
    if (isLiked) {
      tweet.likes = tweet.likes.filter(
        (like) => like.toString() !== user.userId.toString(),
      );
    } else {
      tweet.likes.push(user.userId);
    }

    await tweet.save();

    return NextResponse.json({ tweet }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
