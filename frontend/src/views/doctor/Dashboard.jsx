import { Button, Paper, Avatar, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import userPic from "../../assets/img/53571.jpg";
import Schedule from "./Schedule.js";

import { Redirect } from "react-router";
import Loading from "../../components/layouts/Loading";
import {
	DOCTOR_DASHBOARD,
	DASHBOARD,
	NEW_PRESCRIPTION,
} from "../../constants/routes";
import { getMyDocProfile } from "../../slices/profile";

const useStyles = makeStyles((theme) => ({
	paper: {
		width: "100%",
		minHeight: "600px",
		marginTop: "-8rem",
		borderRadius: "1.5rem",
	},
	large: {
		width: theme.spacing(16),
		height: theme.spacing(16),
		border: "4px solid #a8a8a8",

		borderBottomColor: "#15db95",
		borderRightColor: "#15db95",
		transform: `translate(${2}rem, ${-3}rem)`,
	},
}));

const Dashboard = () => {
	const classes = useStyles();

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
		// <div>
		// 	<div
		// 		style={{
		// 			backgroundImage:
		// 				"url(" +
		// 				"https://as2.ftcdn.net/v2/jpg/03/27/38/85/1000_F_327388577_Ncc4pLj6VLknZ6qGJb2bUkP5dMOBnA01.jpg" +
		// 				")",
		// 			backgroundPosition: "center",
		// 			backgroundSize: "cover",
		// 			backgroundRepeat: "no-repeat",
		// 		}}
		// 	>
		// 		Name : {auth.user.name}
		// 		<br />
		// 		Email :{auth.user.email}
		// 		<br />
		// 		Role :{auth.user.role}
		// 	</div>
		// 	<div>
		// 		<Link
		// 			style={{
		// 				textDecoration: "none",
		// 				color: "white",
		// 			}}
		// 			to={NEW_PRESCRIPTION}
		// 		>
		// 			<Button
		// 				variant="contained"
		// 				color="primary"
		// 				style={{
		// 					width: "70%",
		// 					marginBottom: "3rem",
		// 				}}
		// 			>
		// 				<span>NEW PRESCRIPTION +</span>
		// 			</Button>
		// 		</Link>
		// 	</div>
		// </div>
		<div>
			<div
				style={{
					backgroundImage:
						"url(" +
						"https://as2.ftcdn.net/v2/jpg/03/27/38/85/1000_F_327388577_Ncc4pLj6VLknZ6qGJb2bUkP5dMOBnA01.jpg" +
						")",
					backgroundPosition: "center",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					height: "17rem",
					marginTop: "-10px",
				}}
			></div>

			<Paper elevation={3} className={classes.paper}>
				<Grid container>
					<Grid item xs={12} md={4}>
						<div style={{ width: "92%", margin: "0 auto" }}>
							<Grid conatiner>
								<Grid item xs={12}>
									<Grid
										container
										style={{ height: "5.7rem" }}
									>
										<Grid item xs={5}>
											<Avatar
												alt="Insert the name initial here"
												src={userPic}
												className={classes.large}
											/>
										</Grid>
										<Grid item xs={7}>
											<div>
												<Button
													variant="contained"
													color="primary"
													size="small"
													style={{
														marginLeft: "2rem",
														marginTop: "0.8rem",
														width: "7.5rem",
													}}
												>
													My Profile
												</Button>
											</div>
										</Grid>
									</Grid>
								</Grid>
								<Grid
									item
									xs={12}
									style={{ margin: "0 auto", width: "88%" }}
								>
									<Typography
										variant="h4"
										gutterBottom
										style={{}}
									>
										<b>Dr. {auth.user.name}</b>
									</Typography>
									<Typography
										variant="h7"
										color="textSecondary"
										style={{}}
									>
										<b>Heart specialist</b>
									</Typography>
									<Typography
										variant="h6"
										color="textSecondary"
										style={{}}
									>
										Manipal Hospital
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={12} md={8}>
						<Typography
							variant="h6"
							color="primary"
							style={{
								marginLeft: "2rem",
								marginTop: "1.2rem",
								fontSize: "1.2rem",
							}}
						>
							<b>Upcoming Schedules</b>
						</Typography>
						<div>
							<Grid container>
								<Grid item xs={12} md={12}>
									<Schedule />
									<Schedule />
									<Schedule />
									<Schedule />
								</Grid>
							</Grid>
						</div>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Dashboard;
