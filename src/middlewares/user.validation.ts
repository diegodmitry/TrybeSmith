import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const validateFieldUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = Joi.object({
    username: Joi.string().min(3).required(),
    classe: Joi.string().min(3).required(),
    level: Joi.number().min(1).required(),
    password: Joi.string().min(8).required(),
  }).validate(req.body);

  if (error) {
    if (error.message.includes('is required')) {
      return res.status(400).json({ message: error.message });
    }
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default validateFieldUser;