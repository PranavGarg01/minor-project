import React,{useEffect} from "react";
import { MUItheme } from "../../theme.js";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./Dashboard.css";
import { Redirect } from "react-router";
import Loading from "../../components/layouts/Loading";
import { DOCTOR_DASHBOARD } from "../../constants/routes";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import PrescriptionCard from "../../components/layouts/Dashboard/PrescriptionCard";
import { getMyPrescriptions } from "../../slices/prescription.js";

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(18),
		height: theme.spacing(18),
		border: "4px solid #a8a8a8",
		margin: "0 auto",
		marginBottom: "2rem",
		marginTop: "3rem",
		borderBottomColor: "#15db95",
		borderRightColor: "#15db95",
	},
}));

const Dashboard = () => {
	const { auth, loading,prescriptions } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			prescriptions: state.prescription.prescriptions,
		}),
		shallowEqual
	);
	const classes = useStyles();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyPrescriptions());
	}, [])
	return (
		<div>
			<ThemeProvider theme={MUItheme}>
				<div>
					<Grid container>
						<Grid
							item
							style={{
								// border: "2px solid rgb(214, 212, 212) ",
								marginTop: "1rem",
								marginLeft: "1rem",
								borderRadius: "12px",
								backgroundColor: "rgba(196, 194, 194, 0.30 )",
							}}
							xs={3}
						>
							<div>
								<div class="profile-box">
									<Avatar
										alt="Insert the name initial here"
										src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
										className={classes.large}
									/>
									<span class="profile-name">
										{" "}
										{auth.user.name}
									</span>
									<br></br>
									<span class="profile-email">
										{auth.user.email}
									</span>
									<div>
										<span class="profile-circles">21</span>
										<span class="profile-circles">O+</span>
										<span class="profile-circles">21</span>
									</div>
									<Button
										variant="contained"
										size="large"
										color="primary"
										style={{
											color: "white",
											width: "80%",
											marginBottom: "4.2rem",
											marginTop: "1.6rem",
										}}
									>
										View Profile
									</Button>
								</div>
							</div>
						</Grid>
						<Grid item style={{ marginRight: "-1rem" }} xs={9}>
							<div class="prescription-grid"></div>
							<div class="welcome-image"></div>
						</Grid>
					</Grid>
					<div style={{ textAlign: "center", marginTop: "0rem" }}>
						<Typography
							variant="h4"
							component="h2"
							style={{ letterSpacing: "2px" }}
						>
							MY PRESCRIPTIONS
						</Typography>
						<hr></hr>
					</div>
					<div>
						<Grid container>
							{prescriptions.length != 0 && prescriptions.map((i)=> <Grid item xs={12} md={4}>
								<PrescriptionCard date={i.date} examination={i.examination} doctorName={i.doctor.name}/>
							</Grid>)}
							
							<Grid item xs={12} md={4}>
								<PrescriptionCard />
							</Grid>
							<Grid item xs={12} md={4}>
								<PrescriptionCard />
							</Grid>
						</Grid>
					</div>
				</div>
			</ThemeProvider>
		</div>
	);
};

export default Dashboard;
