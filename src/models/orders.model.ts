import { Pool } from 'mysql2/promise';
import { IOrders } from '../interfaces/orders.interface';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = 'SELECT * FROM Trybesmith.Orders;';
    const result = await this.connection.execute(query);
    const [orders] = result;
    return orders as IOrders[];
  }
}