import React from 'react';

import { Typography } from '@material-ui/core';

import products from '@/fixtures/list';

import { List, Product, Card, Content, Price } from './product-list.styles';

const ProductList: React.FC = () => {
  return (
    <List>
      {products.items.map((item) => (
        <Product key={item.id}>
          <Card src={item.picture} alt={item.title} />
          <Content>
            <Price>
              <Typography style={{ fontSize: '24px' }}>
                {item.price.amount}
              </Typography>
            </Price>
            <Typography>{item.title}</Typography>
          </Content>
        </Product>
      ))}
    </List>
  );
};

export default ProductList;
