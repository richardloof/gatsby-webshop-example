import React from 'react';
import { connect } from 'react-redux';
import { navigate } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { addToCartMessage } from '../store/actions';

const styles = theme => ({
  buttons: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit
  },
  card: {
    width: '300px',
    padding: '20px',
    margin: '10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    marginBottom: theme.spacing.unit * 2
  }
});

function ProductCard({ addToCart, classes, product, showReadMore }) {
  return (
    <Card className={classes.card}>
      <Typography variant="h6" gutterBottom>
        {product.title}
      </Typography>
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={`${product.title} image`}
      />
      <Typography>{product.description}</Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </Button>
        {showReadMore && (
          <Button onClick={() => goToProductPage(product)}>Read more</Button>
        )}
      </div>
    </Card>
  );
}

function goToProductPage(product) {
  navigate(`/product/${product.id}`);
}

const StyledProductCard = withStyles(styles)(ProductCard);

const mapDispatchToProps = {
  addToCart: product => addToCartMessage(product, 1)
};

export default connect(
  null,
  mapDispatchToProps
)(StyledProductCard);
