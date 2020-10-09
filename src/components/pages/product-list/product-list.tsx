import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { Page } from '@/components/templates';
import { Product } from '@/store/ducks/search/types';
import { Products } from '@/components/organisms';
import { searchAction } from '@/store/ducks/search/search';
import { Breadcrumbs, CircularProgress } from '@/components/atoms';

import { Container, Content, Loading } from './product-list.styles';

type Props = {
  items: Product[];
  search: (search: string) => Promise<void>;
  loading: boolean;
  categories: string[];
};

const ProductList: React.FC<Props> = ({
  items,
  search,
  loading,
  categories,
}: Props) => {
  const { query } = useRouter();

  useEffect(() => {
    handleSearch();
  }, [query.search]);

  const handleSearch = async () => {
    if (query.search) {
      await search(`${query.search}`);
    }
  };

  return (
    <Page>
      <Container>
        {loading ? (
          <Loading>
            <CircularProgress />
          </Loading>
        ) : (
          <>
            <Breadcrumbs items={categories} />
            <Content>
              <Products products={items} />
            </Content>
          </>
        )}
      </Container>
    </Page>
  );
};

const mapStateToProps = ({ search: { loading: loadingSearch, data } }) => ({
  items: data.items,
  loading: loadingSearch,
  categories: data.categories,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query: string) => dispatch(searchAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
