import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { Page } from '@/components/templates';
import { Product } from '@/components/organisms';
import { ProductNotFound } from '@/components/molecules';
import { getProductAction } from '@/store/ducks/product/product';
import { Product as ProductType } from '@/store/ducks/product/types';
import { Breadcrumbs, CircularProgress } from '@/components/atoms';

import { Loading } from './product-detail.styles';

type Props = {
  product: ProductType;
  loading: boolean;
  categories: string[];
  getProduct: (id: string) => Promise<void>;
};

const ProductDetail: React.FC<Props> = ({
  product,
  loading,
  categories,
  getProduct,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    handleGetProduct();
  }, [query.id]);

  const handleGetProduct = async (): Promise<void> => {
    await getProduct(`${query.id}`);
  };

  return (
    <Page>
      <>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <>
            <Breadcrumbs items={categories} />
            {product ? <Product product={product} /> : <ProductNotFound />}
          </>
        )}
      </>
    </Page>
  );
};

const mapStateToProps = ({ product, search }) => ({
  product: product.data.item,
  loading: product.loading || search.loading,
  categories: search.data.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id: string) => dispatch(getProductAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
