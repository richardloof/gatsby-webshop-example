import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ProductCard from './product-card';

const styles = () => ({
  grid: {
    maxWidth: '960px',
    width: '100%',
    margin: 'auto'
  }
});

function ProductsSection({ classes, products, showReadMore }) {
  if (products.length < 1) return '';

  return (
    <Grid className={classes.grid} container>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          showReadMore={showReadMore}
        />
      ))}
    </Grid>
  );
}

export default withStyles(styles)(ProductsSection);
