import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IProduct, IProductCreate } from '../interfaces/products.interface';

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

  public async create({ name, amount }: IProductCreate): Promise<IProduct> {
    const query = 'INSERT INTO `Trybesmith`.`Products` (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    const newProduct = { id: insertId, name, amount };

    return newProduct as IProduct;
  }
}