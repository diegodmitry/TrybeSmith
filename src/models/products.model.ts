import { Pool } from 'mysql2/promise';
import { IProduct } from '../interfaces/products.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const query = 'SELECT * FROM Trybesmith.Products';
    const result = await this.connection.execute(query);
    const [products] = result;
    return products as IProduct[];
  }
}