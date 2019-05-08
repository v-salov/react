import React from 'react';
import './product-list-item.css';
import {Link} from "react-router-dom";

const ProductListItem = ({product, onAddedToCart, onRemovedToCart, cartItems}) => {
	const {title,price, coverImage} = product;
	const itemIndex = cartItems.findIndex(({id}) => id === product.id);
	const patch = "/cart/" + product.id;

	return (
		<div className="product-list-item d-flex flex-column align-items-center border text-center">
			<img src={coverImage} alt="cover"/>
			<div className="product-title">
				<Link to={patch}>{title}</Link>
			</div>

			<div className="product-price text-info">${price}</div>
			{itemIndex === -1 ?
				(<button
					onClick={onAddedToCart}
					className="btn btn-primary add-to-cart">
					Add to cart
				</button>) :
				(<button
					onClick={() => onRemovedToCart(product.id)}
					className="btn btn-danger remove-to-cart">
					Remove to cart
				</button>)}

		</div>
	);
};

export default ProductListItem;
