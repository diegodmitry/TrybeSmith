import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const prodcuts = await this.productService.getAll();
    return res.status(200).json(prodcuts);
  };
}

export default ProductsController;