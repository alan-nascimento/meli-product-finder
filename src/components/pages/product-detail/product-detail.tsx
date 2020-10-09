import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { Page } from '@/components/templates';
import { ProductNotFound } from '@/components/molecules';
import { getProductAction } from '@/store/ducks/product/product';
import { Product as ProductDetail } from '@/store/ducks/product/types';
import {
  Paper,
  Price,
  Button,
  Typography,
  Breadcrumbs,
  CircularProgress,
} from '@/components/atoms';

import { Content, Info, Description, Loading } from './product-detail.styles';

type Props = {
  error: boolean;
  product: ProductDetail;
  loading: boolean;
  categories: string[];
  getProduct: (id: string) => Promise<void>;
};

const Product: React.FC<Props> = ({
  error,
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
            {product ? (
              <Paper spacing={4}>
                <>
                  <Content>
                    <figure>
                      <img
                        src={product.picture}
                        title={product.title}
                        alt={product.title}
                      />
                    </figure>

                    <Info>
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

                      <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                      >
                        Comprar
                      </Button>
                    </Info>
                  </Content>

                  <Description>
                    <Typography variant="h5">
                      Descripción del producto
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {product.description}
                    </Typography>
                  </Description>
                </>
              </Paper>
            ) : (
              <>{error && <ProductNotFound />}</>
            )}
          </>
        )}
      </>
    </Page>
  );
};

const mapStateToProps = ({ product, search }) => ({
  error: product.error,
  product: product.data.item,
  loading: product.loading || search.loading,
  categories: search.data.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getProduct: (id: string) => dispatch(getProductAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Product);
