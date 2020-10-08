import React from 'react';

import { Page } from '@/components/templates';
import { ProductList } from '@/components/organisms';

export default function SearchProducts(): JSX.Element {
  return (
    <Page title="Mercado Livre - Search">
      <ProductList />
    </Page>
  );
}
