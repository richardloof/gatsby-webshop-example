import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import CartTable from './cart-table';

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
    <div>
      <CartTable products={products} />
    </div>
  );
}

CartPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired
      })
    })
  ).isRequired
};

export default withStyles(styles)(CartPage);
