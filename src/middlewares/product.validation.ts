import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateFieldProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).required(),
    amount: Joi.string().min(3).required(),
  }).validate(req.body);

  if (error) {
    if (error.message.includes('is required')) return res.status(400).json(error.message);
    return res.status(422).json(error.message);
  }

  next();
};

export default validateFieldProduct;