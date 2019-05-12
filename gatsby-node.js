const path = require('path');
const allProductsJson = require('./graphql/all-products-gql').query;

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const products = await graphql(allProductsJson()).then(result => {
    if (result.errors) throw result.errors;
    const productNodes = result.data.allProductsJson.edges;

    return productNodes.map(edge => {
      return {
        ...edge.node
      };
    });
  });

  createPage({
    path: '/',
    component: path.resolve('./src/templates/index-page.js'),
    context: {
      products
    }
  });

  products.forEach(product => {
    createPage({
      path: `/product/${product.id}`,
      component: path.resolve('./src/templates/product-page.js'),
      context: {
        product
      }
    });
  });
};
