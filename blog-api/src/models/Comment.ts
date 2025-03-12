import mongoose, { Document, Schema } from "mongoose";

export interface IComment extends Document {
  postId: mongoose.Types.ObjectId;
  message: string;
  nickname: string;
  timestamp: Date;
}

const CommentSchema: Schema = new Schema({
  postId: { type: mongoose.Types.ObjectId, required: true },
  message: { type: String, required: true },
  nickname: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Comment = mongoose.model<IComment>("Comment", CommentSchema);

export default Comment;
