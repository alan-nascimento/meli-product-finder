import React from 'react';
import { connect } from 'react-redux';

import { Product } from '@/store/ducks/search/types';
import { ProductList } from '@/components/organisms';
import { DefaultTemplate } from '@/templates';
import { searchAction } from '@/store/ducks/search/search';

type Props = {
  categories: string[];
  items: Product[];
  loading: boolean;
};

const Products: React.FC<Props> = ({ loading, items, categories }: Props) => (
  <DefaultTemplate>
    <section>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <>
          <div>{categories.map((item: any) => item)}</div>
          <ProductList products={items} />
        </>
      )}
    </section>
  </DefaultTemplate>
);

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query: string) => dispatch(searchAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
