import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { MenuItems, UserLinks, DoctorLinks } from "./MenuItems";
import { Button } from "./Button";
import "./Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import { logout } from "../../../slices/auth";

const Navbar = () => {
	const history = useHistory();
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
			<h1 className='navbar-logo' onClick={() => history.push("/")}>
				React<i className='fab fa-react'></i>
			</h1>
			<div className='menu-icon' onClick={handleClick}>
				<i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
			</div>
			<ul className={toggle ? "nav-menu active" : "nav-menu"}>
				{!auth.isAuthenticated
					? MenuItems.map((item, index) => {
							return (
								<li key={index} className="lis">
									<a className={item.cName} href={item.url}>
										{item.title}
									</a>
								</li>
							);
					  })
					: auth.user && auth.user.role == "doctor"
					? DoctorLinks.map((item, index) => (
							<li key={index} className="lis">
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
					  ))
					: UserLinks.map((item, index) => (
							<li key={index} className="lis">
								<a className={item.cName} href={item.url}>
									{item.title}
								</a>
							</li>
					  ))}
				<li className="btnli">
					{auth.isAuthenticated && (
						<Button onClick={() => dispatch(logout())}>
							Logout
						</Button>
					)}
				</li>
			</ul>

			{/* <Button>Sign Up</Button> */}
		</nav>
	);
};

export default Navbar;
