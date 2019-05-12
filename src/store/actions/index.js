const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export function addToCartMessage(product, count) {
  return buildMessage(ADD_TO_CART, { product, count });
}

export function removeFromCartMessage(productId) {
  return buildMessage(REMOVE_FROM_CART, { productId });
}

function buildMessage(type, payload) {
  return { type, payload };
}

const messageHandlers = {
  [ADD_TO_CART]: addToCart,
  [REMOVE_FROM_CART]: removeFromCart
};

function handleMessage(state, { type, payload }) {
  const handler = messageHandlers[type];

  if (!handler) return state;

  return handler(state, payload);
}

function addToCart(state, { product, count }) {
  const products = {
    ...state.products,
    [product.id]: { product, count }
  };

  return {
    ...state,
    products
  };
}

function removeFromCart(state, { productId }) {
  const {
    [productId]: removedProduct, // eslint-disable-line no-unused-vars
    ...products
  } = state.products;

  return {
    ...state,
    products
  };
}

const initialState = {
  products: {}
};

export function cartReducer(state = initialState, action) {
  if (!action) return state;

  return handleMessage(state, action);
}
