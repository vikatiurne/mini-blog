import Comment, { IComment } from "../models/Comment";
import Post, { IPost } from "../models/Post";

class PostServices {
  getAllPosts = async (): Promise<IPost[] | void> => {
    try {
      const allPosts: IPost[] | null = await Post.find().populate("author");
      return allPosts;
    } catch (error) {
      throw new Error(`Error getting all posts ${error}`);
    }
  };

  getPostById = async (postId: string): Promise<IPost | void | null> => {
    try {
      const post = await Post.findById(postId);
      return post;
    } catch (error) {
      throw new Error(`Error getting post by id:${postId}, ${error}`);
    }
  };

  createPost = async (postdata: IPost): Promise<IPost | void> => {
    try {
      const newPost = new Post(postdata);
      await newPost.save();
      return newPost;
    } catch (error) {
      throw new Error(`Error creating post ${error}`);
    }
  };

  deletePost = async (postId: string): Promise<IPost | null | void> => {
    try {
      await Comment.deleteMany({ post: postId });
      return await Post.findByIdAndDelete(postId);
    } catch (error) {
      throw new Error(`Error removing post ${error}`);
    }
  };
}

export default new PostServices();
