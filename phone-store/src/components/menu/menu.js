import React from 'react';
import './menu.css';
import {NavLink} from "react-router-dom";

const Menu = () => {
	return (
		<nav className="col col-sm-3 menu mt-2">
			<ul className="list-group">
					<NavLink className="list-group-item text-center" exact activeClassName="active" to="/">Home</NavLink>
					<NavLink className="list-group-item text-center" activeClassName="active" to="/shop">Shop</NavLink>
			</ul>
		</nav>
	);
};

export default Menu;