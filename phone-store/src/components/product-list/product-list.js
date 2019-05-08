import React, { Component } from 'react';
import ProductListItem from '../product-list-item';

import { connect } from 'react-redux';

import { withProductstoreService } from '../hoc';
import { fetchProducts, productAddedToCart, allProductsRemovedFromCart } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './product-list.css';

const ProductList = ({ products, onAddedToCart, onRemovedToCart, cartItems }) => {
  return (
    <ul className="product-list row">
      {
				products.map((product) => {
          return (
            <li key={product.id}
                className="col col-lg-4 col-md-6 col-sm-8 d-flex justify-content-center">
              <ProductListItem
                cartItems={cartItems}
                product={product}
                onAddedToCart={() => onAddedToCart(product.id)}
								onRemovedToCart={onRemovedToCart}/>
            </li>
          );
        })
      }
    </ul>
  );
};

class ProductListContainer extends Component {

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products, loading, error, onAddedToCart, onRemovedToCart, cartItems } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <ProductList products={products}
												cartItems={cartItems}
												onAddedToCart={onAddedToCart}
												onRemovedToCart={onRemovedToCart}/>;
  }
}

const mapStateToProps = ({ productList: { products, loading, error }, shoppingCart: { cartItems }}) => {
  return { products, loading, error, cartItems };
};

const mapDispatchToProps = (dispatch, { productstoreService }) => {

  return {
    fetchProducts: fetchProducts(productstoreService, dispatch),
    onAddedToCart: (id) => dispatch(productAddedToCart(id)),
		onRemovedToCart:  (id) => dispatch(allProductsRemovedFromCart(id))
  }
};

export default compose(
	withProductstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(ProductListContainer);
