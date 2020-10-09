import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';

import { Product } from '@/store/ducks/search/types';
import { ProductList } from '@/components/pages';
import { searchAction } from '@/store/ducks/search/search';
import { DefaultTemplate } from '@/templates';
import { CircularProgress } from '@/components/atoms';

type Props = {
  items: Product[];
  search: (search: string) => Promise<void>;
  loading: boolean;
  categories: string[];
};

const Products: React.FC<Props> = ({
  items,
  search,
  loading,
  categories,
}: Props) => {
  // const { query } = useRouter();

  // useEffect(() => {
  //   handleSearch();
  // }, [query.search]);

  // const handleSearch = async () => {
  //   if (query.search) {
  //     await search(`${query.search}`);
  //   }
  // };

  return (
    <ProductList />
    // <DefaultTemplate>
    //   <section>
    //     {loading ? (
    //       <CircularProgress />
    //     ) : (
    //       <>
    //         <div>{categories.map((item: any) => item)}</div>
    //         <ProductList products={items || []} />
    //       </>
    //     )}
    //   </section>
    // </DefaultTemplate>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);
