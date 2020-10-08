import React from 'react';
import { Typography } from '@material-ui/core';

import { Product } from '@/store/ducks/search/types';

import { List, Card, Content, Price } from './product-list.styles';

type Props = {
  products: Product[];
};

const ProductList: React.FC<Props> = ({ products }: Props) => {
  return (
    <List>
      {products.map((item: Product) => (
        <div key={item.id}>
          <Card src={item.picture} alt={item.title} />
          <Content>
            <Price>
              <Typography style={{ fontSize: '24px' }}>
                {item.price.amount}
              </Typography>
            </Price>
            <Typography>{item.title}</Typography>
          </Content>
        </div>
      ))}
    </List>
  );
};

export default ProductList;
