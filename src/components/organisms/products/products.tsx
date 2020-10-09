import React from 'react';

import { Product } from '@/store/ducks/search/types';
import { ProductCard } from '@/components/molecules';

import { List } from './products.styles';

type Props = {
  products: Product[];
};

const Products: React.FC<Props> = ({ products }: Props) => (
  <List>
    {products?.map((product: Product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </List>
);

export default Products;
