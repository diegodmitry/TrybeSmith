import { Request, Response } from 'express';
import ProductService from '../services/products.service';

class ProductsController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const prodcuts = await this.productService.getAll();
    return res.status(200).json(prodcuts);
  };

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const productCreated = await this.productService.create(product);
    res.status(201).json(productCreated);
  };
}

export default ProductsController;