import React, { Component, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MenuItems, PrivateLinks } from "./MenuItems";
import { Button } from "../Button";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { logout } from "../../slices/auth";

const Navbar = () => {
	const dispatch = useDispatch();
	const [toggle, setToggle] = useState(false);
	const { auth } = useSelector((state) => ({
		auth: state.auth,
	}));
	const handleClick = () => {
		console.log(toggle);
		setToggle(!toggle);
	};

	return (
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>
				React<i className='fab fa-react'></i>
			</h1>
			<div className='menu-icon' onClick={handleClick}>
				<i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={toggle ? "nav-menu active" : "nav-menu"}>
				{!auth.isAuthenticated
					? (MenuItems.map((item, index) => {
							return (
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
					  }))
					: 
					(
						PrivateLinks.map((item, index) =>
								<li key={index}>
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
						)
					)}</ul>
					   {auth.isAuthenticated && <Button onClick={()=>dispatch(logout())}>Logout</Button>	}	

			{/* <Button>Sign Up</Button> */}
		</nav>
	);
};

export default Navbar;
