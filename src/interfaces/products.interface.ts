export interface IProduct {
  id: number;
  name: string;
  amount: string;
  orderId?: null | number;
}

export interface IProductCreate {
  name: string,
  amount: string;
}