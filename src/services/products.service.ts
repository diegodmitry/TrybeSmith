import connection from '../models/connection';
import ProductModel from '../models/products.model';
import { IProduct } from '../interfaces/products.interface';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }
}