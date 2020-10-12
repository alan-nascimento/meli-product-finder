import React from 'react';
import { connect } from 'react-redux';

import { Page } from '@/components/templates';

import { CircularProgress, SEO } from '@/components/atoms';

type Props = {
  loading: boolean;
};

const Home: React.FC<Props> = ({ loading }: Props) => (
  <Page testId="home">
    <>
      <SEO image="/logo-secondary.jpeg" />
      {loading && <CircularProgress />}
    </>
  </Page>
);

const mapStateToProps = ({ search }) => ({
  loading: search.loading,
});

export default connect(mapStateToProps)(Home);
