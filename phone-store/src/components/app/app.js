import React from 'react';
import {Route, Switch} from 'react-router-dom';
import ShopHeader from '../shop-header';
import Menu from '../menu';
import {HomePage, CartPage, ShoppingPage} from '../pages';


import './app.css';

const App = () => {
	return (
		<main role="main" className="container">

			<ShopHeader/>

			<div className="row">

				<Menu/>

				<div className="col col-sm-9">
					<Switch>
						<Route
							path="/"
							component={HomePage}
							exact/>

						<Route
							path="/cart/:id"
							render={({match}) => {
								const {id} = match.params;
								return <CartPage itemId={id}/>
							}}
						/>

						<Route
							path="/shop"
							component={ShoppingPage}
						/>

						<Route render = {() => <h2 className="text-center mt-2">Page not found!</h2>}/>
					</Switch>
				</div>
			</div>
		</main>
	);
};

export default App;
