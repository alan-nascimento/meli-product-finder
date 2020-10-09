import React from 'react';
import { connect } from 'react-redux';

import { Page } from '@/components/templates';
import { searchAction } from '@/store/ducks/search/search';
import { CircularProgress } from '@/components/atoms';

type Props = {
  loading: boolean;
};

const Home: React.FC<Props> = ({ loading }: Props) => (
  <Page>{loading && <CircularProgress />}</Page>
);

const mapStateToProps = ({ search }) => ({
  loading: search.loading,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query: string) => dispatch(searchAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
