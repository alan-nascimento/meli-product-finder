import React from 'react';
import { connect } from 'react-redux';

import { Page } from '@/components/templates';
import { Product } from '@/store/ducks/search/types';
import { Products } from '@/components/organisms';
import { searchAction } from '@/store/ducks/search/search';
import { ProductNotFound } from '@/components/molecules';
import { Breadcrumbs, CircularProgress, SEO } from '@/components/atoms';

import { Container, Content, Loading } from './product-list.styles';

type Props = {
  items: Product[];
  loading: boolean;
  categories: string[];
};

const ProductList = ({ items, loading, categories }: Props) => (
  <Page>
    <>
      <SEO title="Resultados" />
      <Container>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <>
            {items?.length ? (
              <>
                <Breadcrumbs items={categories} />
                <Content>
                  <Products products={items} />
                </Content>
              </>
            ) : (
              <ProductNotFound type="search" />
            )}
          </>
        )}
      </Container>
    </>
  </Page>
);

ProductList.getInitialProps = ({ store, query: { search } }) => {
  return search ? store.dispatch(searchAction(search)) : {};
};

const mapStateToProps = ({ search, product }) => ({
  items: search.data.items,
  loading: search.loading || product.loading,
  categories: search.data.categories,
});

export default connect(mapStateToProps)(ProductList);
