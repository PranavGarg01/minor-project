import React, { useEffect } from "react";
//routing
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from './components/routing/PrivateRoute';
import NotFound from './components/routing/NotFound';
import Alert from './components/layouts/Alert';
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register.jsx";
import Dashboard from "./views/Dashboard";
//auto login on refresh
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./slices/auth";
//css
import "./App.css";
const App = () => {
	useEffect(() => {
		const loadMe = async () => {
			if (localStorage.token) {
				await setAuthToken(localStorage.token);
				store.dispatch(loadUser());
			}
		};
		loadMe();
	}, []);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Alert />
				<Navbar />
				<Alert />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/login'>
						<Login />
					</Route>
					<Route exact path='/register'>
						<Register />
					</Route>
					<PrivateRoute exact path='/dashboard'>
						<Dashboard />
					</PrivateRoute>
					<Route exact path='*'>
						<NotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
