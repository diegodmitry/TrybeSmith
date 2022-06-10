import { Request, Response } from 'express';
import UserService from '../services/users.service';

class UsersController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const generateToken = await this.userService.create(user);
    return res.status(201).json({ token: generateToken });
  };
}

export default UsersController;