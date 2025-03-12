import { Request, Response } from "express";
import userService from "./user-service";

class UserController {
  createUser = async (
    req: Request,
    res: Response
  ): Promise<Response | void> => {
    try {
      const { userdata } = req.body;
      const user = await userService.createUser(userdata);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json(`Error creating user ${error}`);
    }
    };
    
    getAllUsers = async (req: Request, res: Response): Promise<Response | void> => {
        try {
            const users = await userService.getAllUsers()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(`Error getting all users ${error}`)
        }
    }
}

export default new UserController();
