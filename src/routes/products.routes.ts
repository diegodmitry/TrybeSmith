import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import validateFieldProduct from '../middlewares/product.validation';

const router = Router();

const productsController = new ProductsController();

router.get('/products', productsController.getAll);

router.post('/products', validateFieldProduct, productsController.create);

export default router;