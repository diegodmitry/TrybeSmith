import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import UserModel from '../models/users.model';
import { IUserCreate } from '../interfaces/users.interface';

const generateToken = (data: IUserCreate) => {
  const secret = 'mysecret';
  const jwtConfig:object = {
    expiresIn: '5h',
    algorithm: 'HS256',
  };
  return jwt.sign({ data }, secret, jwtConfig);
};

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async create(user: IUserCreate) {
    const userCreated = await this.model.create(user);
    return generateToken(userCreated);
  }
}