
const productsRequested = () => {
  return {
    type: 'FETCH_PRODUCTS_REQUEST'
  };
};

const productsLoaded = (newProducts) => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    payload: newProducts
  };
};

const productsError = (error) => {
  return {
    type: 'FETCH_PRODUCTS_FAILURE',
    payload: error
  };
};

export const productAddedToCart = (productId) => {
  return {
    type: 'PRODUCT_ADDED_TO_CART',
    payload: productId
  };
};

export const productRemovedFromCart = (productId) => {
  return {
    type: 'PRODUCT_REMOVED_FROM_CART',
    payload: productId
  };
};

export const allProductsRemovedFromCart = (productId) => {
  return {
    type: 'ALL_PRODUCTS_REMOVED_FROM_CART',
    payload: productId
  };
};

const fetchProducts = (productstoreService, dispatch) => () => {
  dispatch(productsRequested());
  productstoreService.getProducts()
    .then((data) => dispatch(productsLoaded(data)))
    .catch((err) => dispatch(productsError(err)));
};

// const fetchBooksNew = (bookstoreService) => () => (dispatch) => {
// 	dispatch(productsRequested());
// 	bookstoreService.getProducts()
// 		.then((data) => dispatch(productsLoaded(data)))
// 		.catch((err) => dispatch(productsError(err)));
// };

export {
  fetchProducts
};
