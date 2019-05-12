import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { removeFromCartMessage } from '../../../store/actions';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
});

function ccyFormat(num) {
  return `$${num / 100}`;
}

function SpanningTable(props) {
  const { classes, products, removeFromCart } = props;

  if (products.length < 1) return 'Your cart is empty';

  const subtotal = products.reduce((sum, { count, product }) => {
    return sum + count * product.price;
  }, 0);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Qty.</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(({ product, count }) => (
            <TableRow key={product.id}>
              <TableCell>
                <h4>{product.title}</h4>
                <p>{product.description}</p>
              </TableCell>
              <TableCell align="right">{count}</TableCell>
              <TableCell align="right">{ccyFormat(product.price)}</TableCell>
              <TableCell align="right">
                <IconButton
                  aria-label="Delete"
                  className={classes.button}
                  onClick={() => removeFromCart(product)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell />
            <TableCell align="right" />
            <TableCell align="right">{ccyFormat(subtotal)}</TableCell>
            <TableCell align="right" />
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

SpanningTable.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired
};

const StyledSpanningTable = withStyles(styles)(SpanningTable);

const mapDispatchToProps = {
  removeFromCart: product => removeFromCartMessage(product.id)
};

export default connect(
  null,
  mapDispatchToProps
)(StyledSpanningTable);
