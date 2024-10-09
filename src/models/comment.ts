import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tweet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Tweet",
    required: true,
  },
});

if (!mongoose.models.Comment) {
  mongoose.model("Comment", commentSchema);
}

export default mongoose.model("Comment");
