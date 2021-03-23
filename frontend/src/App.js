import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import "./App.css";
const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
