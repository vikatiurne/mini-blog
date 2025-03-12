import { Request, Response } from "express";
import commentService from "./comment-service";

class CommentController {
  createComment = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { commentdata } = req.body;
      const comment = await commentService.createComment(commentdata);
      return res.status(201).json(comment);
    } catch (error) {
      res.status(500).json(`Error creating comment: ${error}`);
    }
  };
}

export default new CommentController();
