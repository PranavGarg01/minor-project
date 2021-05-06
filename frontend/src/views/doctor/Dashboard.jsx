import React,{useEffect} from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Redirect } from "react-router";
import Loading from "../../components/layouts/Loading";
import { DOCTOR_DASHBOARD, DASHBOARD } from "../../constants/routes";
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
		</div>
	);
};

export default Dashboard;
