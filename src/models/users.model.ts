import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUserCreate } from '../interfaces/users.interface';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create({ username, classe, level, password }: IUserCreate) {
    const query = `INSERT INTO Trybesmith.Users (username, classe,level,password) 
      VALUES (?,?,?,?);`;
    const values = [username, classe, level, password];
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, values);

    const newUser = { id: insertId, username, classe, level, password };

    return newUser;
  }
}