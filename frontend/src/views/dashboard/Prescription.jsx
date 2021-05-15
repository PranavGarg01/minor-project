import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMyDocProfile } from "../../slices/profile";

const useStyles = makeStyles((theme) => ({
	paper: {
		width: "90%",

		margin: "2rem auto",
	},
	blueStrip: {
		backgroundColor: "#4361ee",
		color: "white",
		padding: "0.5rem",
		marginBottom: "1.3rem",
	},
	blue: {
		marginLeft: "10%",
		marginRight: "5%",
	},
	label: { marginLeft: "2%" },
	font: { fontSize: "1.2rem" },
	hr: {
		marginTop: "1rem",
		marginRight: "auto",
		marginLeft: "auto",
	},
	pres: {},
	exam: { marginLeft: "8%", marginBottom: "1.2rem" },
}));

const Prescription = () => {
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
		<div>
			<Paper elevation={6} className={classes.paper}>
				<div>
					<br></br>
					<br></br>
				</div>
				<div className={classes.blueStrip}>
					<div className={classes.blue}>
						<Grid container>
							<Grid item xs={9}>
								<Typography
									variant="h5"
									gutterBottom
									style={{}}
								>
									Dr. Doctor Blahh
								</Typography>
								<Typography variant="h7" style={{}}>
									Heart specialist
								</Typography>
								<Typography
									variant="h6"
									style={{
										fontSize: "1.1rem",
										marginBottom: "0.3rem",
									}}
								>
									Manipal Hospital
								</Typography>{" "}
							</Grid>
							<Grid item xs={3}></Grid>
						</Grid>
					</div>
				</div>
				<div>
					<Grid container style={{ marginLeft: "8%" }}>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid item xs={6}>
									<span className={classes.label}>
										Name:{" "}
									</span>
									<span className={classes.font}>
										{auth.user.name}
									</span>
								</Grid>
								<Grid item xs={6}>
									<span className={classes.label}>Age: </span>
									<span className={classes.font}>20</span>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid item xs={6}>
									<span className={classes.label}>
										Gender:{" "}
									</span>
									<span className={classes.font}>M</span>
								</Grid>
								<Grid item xs={6}>
									<span className={classes.label}>Bg: </span>
									<span className={classes.font}>O+</span>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container>
								<Grid item xs={6}>
									<span className={classes.label}>
										Height:{" "}
									</span>
									<span className={classes.font}>6'2</span>
								</Grid>
								<Grid item xs={6}>
									<span className={classes.label}>
										Weight:{" "}
									</span>
									<span className={classes.font}>65</span>
								</Grid>
							</Grid>
						</Grid>
						<br></br>
					</Grid>
				</div>
				<hr className={classes.hr}></hr>
				<br></br>
				<Typography style={{ marginLeft: "8%" }} variant="h7">
					<b>Dated: </b>
					<span>12-03-21</span>
				</Typography>
				<br></br>
				<br></br>
				<div>
					<Typography style={{ marginLeft: "8%" }} variant="h6">
						<b>Examination</b>
					</Typography>
					<div className={classes.exam}>
						<Typography>
							The examination is blah blah. The patient have cold
							alongwith mild fever.{" "}
						</Typography>
					</div>
					<div className={classes.pres}>
						<Typography style={{ marginLeft: "8%" }} variant="h6">
							<b>Prescriptions</b>
						</Typography>

						{/* Map medicines in this component */}
						<Typography>
							<i
								class="fas fa-pills"
								style={{
									fontSize: "1.6rem",
									color: "#045de9",
									marginLeft: "8%",
									marginTop: "1rem",
								}}
							></i>{" "}
							<span
								style={{ fontSize: "1.2rem", marginLeft: "3%" }}
							>
								Crocin
							</span>
						</Typography>

						<Typography>
							<i
								class="fas fa-pills"
								style={{
									fontSize: "1.6rem",
									color: "#045de9",
									marginLeft: "8%",
									marginTop: "1rem",
								}}
							></i>{" "}
							<span
								style={{ fontSize: "1.2rem", marginLeft: "3%" }}
							>
								Atorvastatin
							</span>
						</Typography>

						<Typography>
							<i
								class="fas fa-pills"
								style={{
									fontSize: "1.6rem",
									color: "#045de9",
									marginLeft: "8%",
									marginTop: "1rem",
								}}
							></i>{" "}
							<span
								style={{ fontSize: "1.2rem", marginLeft: "3%" }}
							>
								Azithromycin
							</span>
						</Typography>
					</div>
					<br></br>
					<br></br>
					<Typography style={{ marginLeft: "8%" }} variant="h7">
						<b>Follow Up Date: </b>
						<span> 15-03-21</span>
					</Typography>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
				</div>
			</Paper>
		</div>
	);
};

export default Prescription;
