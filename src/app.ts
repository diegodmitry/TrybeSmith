import express from 'express';

import ProductsRouter from './routes/products.routes';
import UsersRouter from './routes/users.routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());

app.use(ProductsRouter);

app.use(UsersRouter);

app.use(errorHandler);

export default app;
