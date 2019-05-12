import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Cart from '../components/cart';
import Layout from '../components/layout';
import withRoot from '../withRoot';

import { getAllProducts } from '../store/selectors';

const styles = theme => ({
  section: {
    marginTop: theme.spacing.unit * 3
  },
  toolbar: {
    marginTop: theme.spacing.unit * 2
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  }
});

function CartPage({ products }) {
  return (
    <Layout>
      <Cart products={products} />
    </Layout>
  );
}

const StyledCartPage = withRoot(withStyles(styles)(CartPage));

function mapStateToProps({ cartReducer }) {
  return {
    products: getAllProducts(cartReducer)
  };
}

export default connect(mapStateToProps)(StyledCartPage);
