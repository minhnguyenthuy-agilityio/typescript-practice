export interface Cart {
  id: string;
  products: ProductCard[];
}

export interface ProductCard {
  id: number;
  name: string;
  quantity: number;
  price: number;
}
