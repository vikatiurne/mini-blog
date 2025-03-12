import Comment, { IComment } from "../models/Comment";

class CommentService {
  createComment = async (commentdata: IComment): Promise<IComment | void> => {
    try {
      const comment = new Comment(commentdata);
      await comment.save();
      return comment;
    } catch (error) {
      throw new Error(`Error creating comment ${error}`);
    }
  };
}

export default new CommentService();
