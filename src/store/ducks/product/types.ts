export type Author = {
  readonly name: string;
  readonly lastname: string;
};

export type Product = {
  readonly id: string;
  readonly title: string;
  readonly price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  readonly picture: string;
  readonly condition: string;
  readonly free_shipping: boolean;
  readonly sold_quantity?: number;
  readonly description?: string;
  readonly state?: string;
};

export type ProductDetail = {
  readonly author: Author;
  readonly item: Product;
};
