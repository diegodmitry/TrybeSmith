import { Pool } from 'mysql2/promise';
import { ILogin } from '../interfaces/login.interface';

export default class LoginModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async login({ username }: ILogin) {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username=?';
    const [result] = await this.connection.execute(query, [username]);
    const [user] = result as ILogin[];

    return user;
  }
}