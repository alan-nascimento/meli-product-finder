import React from 'react';

import { Typography } from '@/components/atoms';

import { Container } from './price.styles';

type Props = {
  size?: 'medium' | 'large';
  amount: number;
  decimals: number;
  className?: string;
};

const Price: React.FC<Props> = ({
  size,
  amount,
  decimals,
  className,
}: Props) => {
  const formatedAmount = amount
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

  return (
    <Container className={className}>
      <Typography variant={size === 'large' ? 'h3' : 'body1'}>
        {`$ ${formatedAmount}`}
        <span>
          {(decimals > 0 &&
            (decimals.toString().length < 2 ? `0${decimals}` : decimals)) ||
            '00'}
        </span>
      </Typography>
    </Container>
  );
};

export default Price;
