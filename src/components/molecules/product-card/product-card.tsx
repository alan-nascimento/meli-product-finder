import React from 'react';
import Link from 'next/link';

import { Product } from '@/store/ducks/search/types';
import { Icon, Price, Typography } from '@/components/atoms';

import {
  Info,
  Figure,
  Content,
  Location,
  Container,
  PriceContent,
} from './product-card.styles';

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  return (
    <Link href={`/items/item?id=${product.id}`} as={`/items/${product.id}`}>
      <Container>
        <Figure
          src={product.picture}
          alt={product.title}
          title={product.title}
        />
        <Info>
          <Content>
            <PriceContent>
              <Price
                amount={product.price.amount}
                decimals={product.price.decimals}
              />
              {product.free_shipping && (
                <Icon
                  src="/icon-shipping@2x.png"
                  alt="Icono"
                  title="Flete gratis"
                  size={18}
                />
              )}
            </PriceContent>
            <Typography className="description">{product.title}</Typography>
          </Content>
          <Location>
            <Typography>{product.state}</Typography>
          </Location>
        </Info>
      </Container>
    </Link>
  );
};

export default ProductCard;
