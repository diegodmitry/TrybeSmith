import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import validateFieldUser from '../middlewares/user.validation';

const router = Router();

const usersController = new UsersController();

router.post('/users', validateFieldUser, usersController.create);

export default router;