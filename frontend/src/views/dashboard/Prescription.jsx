import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { getMyDocProfile } from "../../slices/profile";
import { useParams } from "react-router-dom";
import { getPrescriptionById } from "../../slices/prescription";
import Loading from "../../components/layouts/Loading";
const useStyles = makeStyles((theme) => ({
	paper: {
		width: "90%",
		margin: "2rem auto",
		overflowX: "hidden",
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

const Prescription = ({}) => {
	const { id } = useParams();
	const classes = useStyles();
	const dispatch = useDispatch();
	const { loading, prescription } = useSelector(
		(state) => ({
			loading: state.loading.loading,
			prescription: state.prescription.prescription,
		}),
		shallowEqual
	);
	useEffect(() => {
		dispatch(getPrescriptionById(id));
	}, []);
	//DATE Calculation
	const extractDate = (date) => {
		var date2 = new Date(date);
		var monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		var d = date2.getDate();
		var m = monthNames[date2.getMonth()];
		var y = date2.getFullYear();
		return [d, m, y];
	};
	console.log(id);
	return (
		<div>
			{loading || prescription == null ? (
				<Loading />
			) : (
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
										variant='h5'
										gutterBottom
										style={{}}
									>
										Dr. {prescription.doctor.name}
									</Typography>
									<Typography variant='h7' style={{}}>
										{
											prescription.doctor.profile
												.specialization
										}
									</Typography>
									<Typography
										variant='h6'
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
											{prescription.user.name}
										</span>
									</Grid>
									<Grid item xs={6}>
										<span className={classes.label}>
											Age:{" "}
										</span>
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
										<span className={classes.font}>
											{prescription.profile.gender}
										</span>
									</Grid>
									<Grid item xs={6}>
										<span className={classes.label}>
											Bg:{" "}
										</span>
										<span className={classes.font}>
											{prescription.profile.bloodGroup}
										</span>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={12} md={6}>
								<Grid container>
									<Grid item xs={6}>
										<span className={classes.label}>
											Height:{" "}
										</span>
										<span className={classes.font}>
											{prescription.profile.height}
										</span>
									</Grid>
									<Grid item xs={6}>
										<span className={classes.label}>
											Weight:{" "}
										</span>
										<span className={classes.font}>
											{prescription.profile.weight}
										</span>
									</Grid>
								</Grid>
							</Grid>
							<br></br>
						</Grid>
					</div>
					<hr className={classes.hr}></hr>
					<br></br>
					<Typography style={{ marginLeft: "8%" }} variant='h7'>
						<b>Dated: </b>
						<span>{`${extractDate(prescription.date)[0]} ${
							extractDate(prescription.date)[1]
						} ${extractDate(prescription.date)[2]}`}</span>
					</Typography>
					<br></br>
					<br></br>
					<div>
						<Typography style={{ marginLeft: "8%" }} variant='h6'>
							<b>Examination</b>
						</Typography>
						<div className={classes.exam}>
							<Typography>{prescription.examination} </Typography>
						</div>
						<div className={classes.pres}>
							<Typography
								style={{ marginLeft: "8%" }}
								variant='h6'
							>
								<b>Prescriptions</b>
							</Typography>

							{/* Map medicines in this component */}
							{
								prescription.medicines.split(" ").map(m=>
							<Typography>
								<i
									class='fas fa-pills'
									style={{
										fontSize: "1.6rem",
										color: "#045de9",
										marginLeft: "8%",
										marginTop: "1rem",
									}}
								></i>{" "}
								<span
									style={{
										fontSize: "1.2rem",
										marginLeft: "3%",
									}}
								>
									{m}
								</span>
							</Typography>
)
}
						</div>
						<br></br>
						<br></br>
						<Typography style={{ marginLeft: "8%" }} variant='h7'>
							<b>Follow Up Date: </b>
							<span>{`${extractDate(prescription.followUp)[0]} ${
								extractDate(prescription.followUp)[1]
							} ${extractDate(prescription.followUp)[2]}`}</span>
						</Typography>
						<br></br>
						<br></br>
						<br></br>
						<br></br>
					</div>
				</Paper>
			)}
		</div>
	);
};

export default Prescription;
