import { Request, Response } from "express";
import postServices from "./post-services";
import { IPost } from "../models/Post";

class PostControllers {
  getAllPosts = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const allPosts = await postServices.getAllPosts();
      console.log("post");
      return res.status(200).json(allPosts);
    } catch (error) {
      return res.status(500).json("Error getting all posts");
    }
  };

  getPostById = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { postId } = req.params;
      const post = await postServices.getPostById(postId);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json(`Error get post, ${error}`);
    }
  };

  createPost = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    const { postdata } = req.body;
    try {
      console.log(postdata);
      const newPost = await postServices.createPost(postdata);
      return res.status(201).json(newPost);
    } catch (error) {
      console.log(error);
      return res.status(500).json("Error creatting post");
    }
  };

  deletePost = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { postId } = req.params;
      const deletedPost = await postServices.deletePost(postId);
      if (!deletedPost) {
        return res.status(404).json("Post for delete not found");
      }
      return res.json(deletedPost);
    } catch (error) {
      return res.status(500).json("Error removing the post");
    }
  };
}

export default new PostControllers();
