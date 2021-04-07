import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import Loading from "../../components/layouts/Loading";
const Dashboard = () => {
	const { auth, loading } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
		}),
		shallowEqual
	);
	return (
		<div>
			{auth.user == null || loading ? (
				<Loading />
			) : (
				<>
					Name : {auth.user.name}
					Email :{auth.user.email}
				</>
			)}
		</div>
	);
};

export default Dashboard;
