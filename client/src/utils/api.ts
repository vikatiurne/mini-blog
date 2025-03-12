import axios from "axios";
import { User } from "@/types/types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const registrUser = async (userdata: User) => {
  try {
    const res = await axios.post(`${API_URL}/api/user/createUser`, {
      userdata,
    });
    return res.data;
  } catch (error) {
    throw new Error(`Error registration user ${error}`);
  }
};

export const logout = async (userId: string) => {
  try {
    const res = await axios.delete(`${API_URL}/api/user/logout/:userId`);
    return res.data;
  } catch (error) {
    throw new Error(`Error logout user ${error}`);
  }
};

export const getAllPosts = async () => {
  try {
    const res = await axios.get(`${API_URL}/api/post/getAllPosts`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting all post: ${error}`);
  }
};

export const getPostById = async (id: string) => {
  try {
    const res = await axios.get(`${API_URL}/api/post/getPostById/:id`);
    return res.data;
  } catch (error) {
    throw new Error(`Error getting post ${error}`);
  }
};
