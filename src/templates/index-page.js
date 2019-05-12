import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import { navigate } from 'gatsby';

import Layout from '../components/layout';
import ProductsSection from '../components/products-section';
import withRoot from '../withRoot';

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
  },
  cartIcon: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
});

function IndexPage({ classes, pageContext }) {
  const { products } = pageContext;

  return (
    <Layout>
      <ProductsSection products={products} showReadMore />
      <div className={classes.toolbar}>
        <Button
          variant="fab"
          color="primary"
          aria-label="Shopping cart"
          className={classes.cartIcon}
          onClick={goToCart}
        >
          <Icon>shopping_cart</Icon>
        </Button>
      </div>
    </Layout>
  );
}

function goToCart() {
  navigate('/cart');
}

export default withRoot(withStyles(styles)(IndexPage));
