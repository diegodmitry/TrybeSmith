import connection from '../models/connection';
import OrderModel from '../models/orders.model';
import ProductModel from '../models/products.model';

export default class OrderService {
  public model: OrderModel;

  public productsModel: ProductModel;

  constructor() {
    this.model = new OrderModel(connection);
    this.productsModel = new ProductModel(connection);
  }

  public async getAll() {
    const ordersArr = await this.model.getAll();

    const ordersWithProducts = ordersArr.map(async ({ id, userId }) => {
      const productsIds = [await this.productsModel.getById(id)];

      return ({
        id,
        userId,
        productsIds,
      });
    });
    const orders = await Promise.all(ordersWithProducts);
    return orders;
  }
}