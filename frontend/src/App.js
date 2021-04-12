import React, { lazy, Suspense, useEffect } from "react";
//routing
import * as ROUTES from "./constants/routes";
import { Switch, Link, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./components/routing/PrivateRoute";
// import DoctorRoute from "./components/routing/DoctorRoute";

//layouts
import NotFound from "./components/routing/NotFound";
import Loading from "./components/layouts/Loading";
import Alert from "./components/layouts/Alert";
import Navbar from "./components/layouts/Navbar/Navbar.js";

//auto login on refresh
import { Provider } from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./slices/auth";
//css
import "./App.css";
import { clearLoading, setLoading } from "./slices/loading";
//components
const DoctorRoute = lazy(() => import("./components/routing/DoctorRoute"));
const UserRoute = lazy(() => import("./components/routing/UserRoute"));
const Home = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Dashboard = lazy(() => import("./views/dashboard/Dashboard"));
const DisplayProfile = lazy(() =>
	import("./views/dashboard/profile/DisplayProfile.jsx")
);
const CreateProfile = lazy(() =>
	import("./views/dashboard/profile/CreateProfile")
);
const EditProfile = lazy(() => import("./views/dashboard/profile/EditProfile"));

//doctor
const DoctorDashboard = lazy(() => import("./views/doctor/Dashboard.jsx"));
const App = () => {
	useEffect(() => {
		const loadMe = async () => {
			if (localStorage.token) {
				await setAuthToken(localStorage.token);
				store.dispatch(loadUser());
			} else {
				store.dispatch(clearLoading());
			}
		}; // this thing does loading : false if not logged in
		loadMe();
	}, []);
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Suspense fallback={<Loading />}>
					<Alert />
					<Navbar />
					<Alert />
					<Switch>
						<Route exact path={ROUTES.HOME}>
							<Home />
						</Route>
						<Route exact path={ROUTES.LOGIN}>
							<Login />
						</Route>
						<Route exact path={ROUTES.REGISTER}>
							<Register />
						</Route>
						{/* private routes */}

						<PrivateRoute exact path={ROUTES.DASHBOARD}>
							<UserRoute>
								<Dashboard />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.MYPROFILE}>
							<UserRoute>
								<DisplayProfile />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.CREATEPROFILE}>
							<UserRoute>
								<CreateProfile />
							</UserRoute>
						</PrivateRoute>
						<PrivateRoute exact path={ROUTES.UPDATEPROFILE}>
							<UserRoute>
								<EditProfile />
							</UserRoute>
						</PrivateRoute>

						{/* doctor  */}
						<PrivateRoute exact path={ROUTES.DOCTOR_DASHBOARD}>
							<DoctorRoute>
								<DoctorDashboard />
							</DoctorRoute>
						</PrivateRoute>
						{/* 404 not found */}
						<Route exact path='*'>
							<NotFound />
						</Route>
					</Switch>
				</Suspense>
			</BrowserRouter>
		</Provider>
	);
};

export default App;
