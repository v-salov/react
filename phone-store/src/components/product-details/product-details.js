import React, {Component} from 'react';
import './product-details.css'
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import {fetchProducts} from "../../actions";
import { withProductstoreService } from "../hoc";
import {connect} from "react-redux";
import {compose} from "../../utils";

class ProductDetails extends Component{

	componentDidMount() {
		if (this.props.products.length === 0) {
			this.props.fetchProducts();
		}
	}

	render() {
		const {itemId, loading, products, error} = this.props;

		if (loading) {
			return <Spinner/>;
		}

		if (error) {
			return <ErrorIndicator/>;
		}

		const product = (products.filter((item) => item.id === +itemId))[0];

		return (
			<div className="text-center mt-2">
				<h2>Product details</h2>
				<hr/>
				<div className="card">
					<img src={product.coverImage} alt={product.title} className="img-rounded center-block"/>
					<div className="card-body">
						<h2 className="card-title">Product Name : {product.title}</h2>
						<hr/>
						<h3 className="card-subtitle mb-2 text-muted">
							Product price : {product.price} $
						</h3>
						<hr/>
					</div>
				</div>

			</div>)
	};
}

const mapStateToProps = ({productList: {products, loading, error}}) => {
	return {products, loading, error};
}

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
	return {
		fetchProducts: fetchProducts(bookstoreService, dispatch)
	}
}

export default compose(
	withProductstoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(ProductDetails);