import { Button, Paper, Avatar, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import userPic from "../../assets/img/53571.jpg";
import Schedule from "./Schedule.js";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import clsx from "clsx";
import Divider from "@material-ui/core/Divider";
import { getMyDocProfile } from "../../slices/profile";
import { getDoctorPrescriptions } from "../../slices/prescription";

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
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	listItem: {
		width: "83%",
		// margin: "0 1.0rem",
		marginLeft: "2rem",
		"&.Mui-expanded": {
			marginTop: "16px ",
			marginBottom: "16px ",
			marginLeft: "2rem",
		},
	},
	column: {
		flexBasis: "100%",
		padding: theme.spacing(0, 2),
	},
	columnHeader: {
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(15),
	},
}));

const Dashboard = () => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const [openList, setOpenList] = React.useState({});
	const handleClick = (e, index) => {
		console.log(index);
		setOpenList((openList) => ({ ...openList, [index]: !openList[index] }));
	};
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
	const { auth, loading, prescriptions } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			prescriptions: state.prescription.prescriptions,
		}),
		shallowEqual
	);
	useEffect(() => {
		dispatch(getMyDocProfile());
		dispatch(getDoctorPrescriptions());
	}, []);

	//Upcoming Visits Calculator
	const [visits, setVisits] = React.useState([]);
	useEffect(() => {
		if (prescriptions.length !== 0) {
			setVisits([]);
			prescriptions.map((rx, i) => {
				const followUp = new Date(rx.followUp);
				const today = new Date();
				if (followUp >= today) {
					setVisits((visits) => [...visits, rx]);
				}
			});
		}
	}, [prescriptions]);
	return (
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
							<Grid container>
								<Grid item xs={12}>
									<Grid
										container
										style={{ height: "5.7rem" }}
									>
										<Grid item xs={5}>
											<Avatar
												alt='Insert the name initial here'
												src={userPic}
												className={classes.large}
											/>
										</Grid>
										<Grid item xs={7}>
											<div>
												<Button
													variant='contained'
													color='primary'
													size='small'
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
									style={{
										margin: "0 auto",
										width: "88%",
										paddingLeft: "7%",
									}}
								>
									<Typography
										variant="h5"
										gutterBottom
										style={{ fontSize: "1.66rem" }}
									>
										<b>Dr. {auth.user.name}</b>
									</Typography>
									<Typography
										variant='h7'
										color='textSecondary'
										style={{}}
									>
										<b>Heart specialist</b>
									</Typography>
									<Typography
										variant="h6"
										color="textSecondary"
										style={{ fontSize: "1.2rem" }}
									>
										Manipal Hospital
									</Typography>
								</Grid>
							</Grid>
						</div>
					</Grid>
					<Grid item xs={12} md={8}>
						<Typography
							variant='h6'
							color='primary'
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
								{visits.map((visit, index) => (
									<Grid key={index} item xs={12} md={12}>
										<Schedule
											date={visit.followUp}
											doctorName={visit.user.name}
											specialization={
												visit.doctor.profile
													.specialization
											}
											phoneNumber={
												visit.profile.phoneNumber
											}
											examine={visit.examination}
										/>
									</Grid>
								))}
							</Grid>
						</div>
						<Typography
							variant='h6'
							color='primary'
							style={{
								marginLeft: "2rem",
								marginTop: "1.2rem",
								marginBottom: "0.8rem",
								fontSize: "1.2rem",
							}}
						>
							<b>Issued Prescriptions</b>
						</Typography>
						<div>
							{prescriptions.map((rx, index) => (
								<Accordion
									key={index}
									expanded={openList[index]}
									onChange={(e) => handleClick(e, index)}
									className={classes.listItem}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
									>
										<Grid container>
											<Grid item xs={12}>
												<Typography
													variant='subtitle1'
													className={
														classes.secondaryHeading
													}
												>
													{`${
														extractDate(rx.date)[0]
													} ${
														extractDate(rx.date)[1]
													}, ${
														extractDate(rx.date)[2]
													}`}
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<Typography>
													{`Patient : ${rx.user.name}`}
												</Typography>
											</Grid>
										</Grid>
									</AccordionSummary>
									<AccordionDetails>
										<Grid container spacing={1}>
											<Grid
												item
												xs={12}
												className={classes.column}
											>
												<Typography
													className={
														classes.columnHeader
													}
												>
													Examination
												</Typography>
												<Typography>
													{rx.examination}
												</Typography>
												<Divider />
											</Grid>
											<Grid
												item
												xs={12}
												className={clsx(
													classes.column,
													classes.helper
												)}
											>
												<Typography
													className={
														classes.columnHeader
													}
												>
													Medicines
												</Typography>
												<Typography
													style={{
														wordBreak: "break-all",
													}}
												>
													{rx.medicines}
												</Typography>
												<Divider />
											</Grid>
											<Grid
												item
												xs={12}
												className={clsx(
													classes.column,
													classes.helper
												)}
											>
												<Typography
													className={
														classes.columnHeader
													}
												>
													Follow Up Date
												</Typography>
												<Typography>
													{`${
														extractDate(
															rx.followUp
														)[0]
													} ${
														extractDate(
															rx.followUp
														)[1]
													}, ${
														extractDate(
															rx.followUp
														)[2]
													}`}
												</Typography>
											</Grid>
										</Grid>
									</AccordionDetails>
								</Accordion>
							))}
						</div>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Dashboard;
