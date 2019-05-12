import React from 'react';
import Typography from '@material-ui/core/Typography';

import withRoot from '../withRoot';
import Layout from '../components/layout';

const NotFoundPage = () => (
  <Layout>
    <Typography variant="h3" gutterBottom>
      Woops!
    </Typography>
    <Typography>That page does not exist..</Typography>
  </Layout>
);

export default withRoot(NotFoundPage);
