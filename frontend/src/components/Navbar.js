import React from 'react'
import {Switch,Link,BrowserRouter,Route} from 'react-router-dom'


const Navbar = () => {
	return (
		<div>
			<Link to="/">Home</Link>
			<Link to="/login">Login</Link>
			<Link to="/register">Register</Link>
		</div>
	)
}

export default Navbar

