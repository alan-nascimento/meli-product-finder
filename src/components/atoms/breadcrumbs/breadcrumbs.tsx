import React from 'react';
import { Breadcrumbs as BreadcrumbsBase } from '@material-ui/core';

import { Icon, Typography } from '@/components/atoms';

import { Container } from './breadcrumbs.styles';

type Props = {
  items: string[];
};

const Breadcrumbs: React.FC<Props> = ({ items }: Props) => (
  <Container data-testid="breadcrumbs">
    <BreadcrumbsBase
      separator={
        <Icon
          src="/chevron.svg"
          alt="Chevron icono"
          title="Chevron"
          size={10}
        />
      }
      aria-label="breadcrumb"
    >
      {items?.map((item: string, index: number) => (
        <Typography key={item} variant="body2" color="textSecondary">
          {index + 1 === items.length ? <strong>{item}</strong> : item}
        </Typography>
      ))}
    </BreadcrumbsBase>
  </Container>
);

export default Breadcrumbs;
