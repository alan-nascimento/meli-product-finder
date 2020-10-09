import React from 'react';
import { useRouter } from 'next/router';

import { Page } from '@/components/templates';

const ProductDetail = (): JSX.Element => {
  const router = useRouter();

  return (
    <Page>
      <h1>{router.query.id}</h1>
    </Page>
  );
};

export default ProductDetail;
