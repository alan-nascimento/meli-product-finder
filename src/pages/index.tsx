import React from 'react';
import { connect } from 'react-redux';

import { DefaultTemplate } from '@/templates';

type Props = {
  loading: boolean;
};

const Home: React.FC<Props> = ({ loading }: Props) => (
  <DefaultTemplate>
    {loading ? <div>LOADING</div> : <h3>Find products</h3>}
  </DefaultTemplate>
);

const mapStateToProps = ({ search }) => ({
  loading: search.loading,
});

export default connect(mapStateToProps)(Home);
