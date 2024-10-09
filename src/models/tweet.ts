import mongoose, { Schema, models, model } from "mongoose";

const tweetSchema = new Schema(
  {
    content: { type: String, required: true, maxlength: 280 },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true },
);

tweetSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "tweet",
});

tweetSchema.set("toObject", { virtuals: true });
tweetSchema.set("toJSON", { virtuals: true });

const Tweet = models.Tweet || model("Tweet", tweetSchema);
export default Tweet;
