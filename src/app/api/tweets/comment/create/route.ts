import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Comment from "@/models/comment";
import { getUserFromToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const { tweetId, content } = await request.json();
  const token = request.cookies.get("token");
  const user = await getUserFromToken(token?.value);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!content || content.length > 280) {
    return NextResponse.json(
      { error: "Comment must be between 1 and 280 characters." },
      { status: 400 },
    );
  }

  try {
    const newComment = new Comment({
      content,
      author: user.userId,
      tweet: tweetId,
    });

    await newComment.save();

    return NextResponse.json({ comment: newComment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
