import React from 'react';

import { Typography } from '@/components/atoms';

import { Container } from './price.styles';

type Props = {
  amount: number;
  decimals: number;
};

const Price: React.FC<Props> = ({ amount, decimals }: Props) => {
  const formatedAmount = amount
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return (
    <Container>
      <Typography>
        {`$ ${formatedAmount}`}
        <span>
          {decimals > 0 &&
            (decimals.toString().length < 2 ? `0${decimals}` : decimals)}
        </span>
      </Typography>
    </Container>
  );
};

export default Price;
