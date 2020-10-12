import React from 'react';
import { connect } from 'react-redux';

import { Page } from '@/components/templates';
import { Product } from '@/components/organisms';
import { ProductNotFound } from '@/components/molecules';
import { getProductAction } from '@/store/ducks/product/product';
import { Product as ProductType } from '@/store/ducks/product/types';
import { Breadcrumbs, CircularProgress } from '@/components/atoms';

type Props = {
  product: ProductType;
  loading: boolean;
  categories: string[];
};

const ProductDetail = ({ product, loading, categories }: Props) => (
  <Page>
    {loading ? (
      <CircularProgress />
    ) : (
      <>
        <Breadcrumbs items={categories} />
        {product ? <Product product={product} /> : <ProductNotFound />}
      </>
    )}
  </Page>
);

ProductDetail.getInitialProps = ({ store, query: { id } }) => {
  return id ? store.dispatch(getProductAction(id)) : {};
};

const mapStateToProps = ({ product, search }) => ({
  product: product.data.item,
  loading: product.loading || search.loading,
  categories: search.data.categories,
});

export default connect(mapStateToProps)(ProductDetail);
