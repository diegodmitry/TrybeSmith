import jwt from 'jsonwebtoken';
import connection from '../models/connection';
import LoginModel from '../models/login.model';
import { ILogin } from '../interfaces/login.interface';

const generateToken = (data: ILogin) => {
  const secret = 'mysecret';
  const jwtConfig:object = {
    expiresIn: '5h',
    algorithm: 'HS256',
  };
  return jwt.sign({ data }, secret, jwtConfig);
};

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(user: ILogin) {
    const userOnBD = await this.model.login(user);
    if (!userOnBD || userOnBD.password !== user.password) {
      return null;
    }
    return generateToken(userOnBD);
  }
}