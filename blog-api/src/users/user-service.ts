import bcrypt from "bcrypt";
import User, { IUser } from "../models/User";

class UserService {
  createUser = async (userdata: IUser): Promise<IUser | void> => {
    try {
      const newUser = new User(userdata);
      newUser.password = bcrypt.hashSync(newUser.password, 7);
      await newUser.save();
      return newUser;
    } catch (error) {
      throw new Error(`Error creating user ${error}`);
    }
  };

  getAllUsers = async (): Promise<IUser[] | void> => {
    try {
      const users = await User.find();
      return users;
    } catch (error) {
      throw new Error(`Error getting all users ${error}`);
    }
  };
}

export default new UserService();
