import React from 'react';

import { ProductList } from '@/components/organisms';
import { DefaultTemplate } from '@/templates';

export default function SearchProducts(): JSX.Element {
  return (
    <DefaultTemplate>
      <ProductList />
    </DefaultTemplate>
  );
}
