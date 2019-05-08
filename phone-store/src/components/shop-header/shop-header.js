import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';


const ShopHeader = ({ numItems, total }) => {
  return (

			<div className="shop-header navbar">
				<Link to="/" className="logo" >
					<i className="fa fa-product-hunt"></i>
					honeStore
				</Link>
				<Link to="/shop">
					<div className="shopping-cart">
						<i className="cart-icon fa fa-cart-plus" />
						{numItems} items (${total})
					</div>
				</Link>
			</div>


  );
};

const mapStateToProps = ({shoppingCart:{cartItems, orderTotal}}) => {
  return {
    numItems: cartItems.length,
    total: orderTotal
  }
}

export default connect(mapStateToProps)(ShopHeader);
