import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Redirect } from "react-router";
import Loading from "../../components/layouts/Loading";
import {
	DOCTOR_DASHBOARD,
	DASHBOARD,
	NEW_PRESCRIPTION,
} from "../../constants/routes";
import { getMyDocProfile } from "../../slices/profile";
const Dashboard = () => {
	const dispatch = useDispatch();
	const { auth, loading } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
		}),
		shallowEqual
	);
	useEffect(() => {
		dispatch(getMyDocProfile());
	}, []);
	return (
		<div>
			<>
				Name : {auth.user.name}
				<br />
				Email :{auth.user.email}
				<br />
				Role :{auth.user.role}
			</>
			<div>
				<Link
					style={{
						textDecoration: "none",
						color: "white",
					}}
					to={NEW_PRESCRIPTION}
				>
					<Button
						variant='contained'
						color='primary'
						style={{
							width: "70%",
							marginBottom: "3rem",
						}}
					>
						<span>NEW PRESCRIPTION +</span>
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Dashboard;
