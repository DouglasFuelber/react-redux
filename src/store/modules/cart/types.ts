export interface IProduct {
  id: number;
  title: string;
  price: number;
}

export interface iCartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  items: iCartItem[];
}