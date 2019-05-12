exports.query = () => (
  `query {
    allProductsJson {
      edges {
        node {
          id,
          title,
          description,
          price,
          imageUrl,
        }
      }
    }
  }`
);
