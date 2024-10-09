import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "@/lib/db";
import Tweet from "@/models/tweet";
import { getUserFromToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  await connectToDatabase();

  const { content } = await request.json();

  if (!content || content.length > 280) {
    return NextResponse.json(
      { error: "Content must be between 1 and 280 characters." },
      { status: 400 },
    );
  }

  const token = request.cookies.get("token");

  const user = await getUserFromToken(token?.value);
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    console.log(user.userId);
    const tweet = new Tweet({ content, author: user.userId });
    await tweet.save();

    return NextResponse.json({ tweet }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
