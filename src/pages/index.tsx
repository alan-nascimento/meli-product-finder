import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

import { searchAction } from '@/store/ducks/search/search';
import { DefaultTemplate } from '@/templates';
import { CircularProgress } from '@/components/atoms';

type Props = {
  loading: boolean;
};

const Home: React.FC<Props> = ({ loading }: Props) => (
  <DefaultTemplate>
    {loading ? <CircularProgress /> : <Typography>Buscar</Typography>}
  </DefaultTemplate>
);

const mapStateToProps = ({ search }) => ({
  loading: search.loading,
});

const mapDispatchToProps = (dispatch) => ({
  search: (query: string) => dispatch(searchAction(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
