import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Comment from "@/models/comment";

export async function GET(request: NextRequest) {
  await connectToDatabase();

  const tweetId = request.nextUrl.searchParams.get("tweetId");
  console.log(tweetId);

  if (!tweetId) {
    return NextResponse.json(
      { error: "Tweet ID is required" },
      { status: 400 },
    );
  }

  try {
    const comments = await Comment.find({ tweet: tweetId }).populate("author");

    return NextResponse.json({ comments }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
