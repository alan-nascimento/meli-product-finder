import React from 'react';

import { Product as ProductDetail } from '@/store/ducks/product/types';
import { Paper, Price, Button, Typography, SEO } from '@/components/atoms';

import { Content, Info, Description } from './product.styles';

type Props = {
  product: ProductDetail;
};

const Product: React.FC<Props> = ({ product }: Props) => (
  <Paper spacing={4}>
    <>
      <SEO
        title={product.title}
        image={product.picture}
        description={product.description}
      />

      <Content data-testid="product">
        <figure>
          <img
            src={product.picture}
            title={product.title}
            alt={product.title}
          />
        </figure>

        <Info data-testid="product-info">
          <Typography className="condition" variant="body2">
            {`${product?.condition} - ${product.sold_quantity} vendidos`}
          </Typography>
          <Typography variant="h5">
            <strong>{product.title}</strong>
          </Typography>

          <Price
            size="large"
            className="price"
            amount={product.price.amount}
            decimals={product.price.decimals}
          />

          <Button variant="contained" color="secondary" size="large">
            Comprar
          </Button>
        </Info>
      </Content>

      <Description data-testid="product-description">
        <Typography variant="h5">Descripción del producto</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
      </Description>
    </>
  </Paper>
);

export default Product;
