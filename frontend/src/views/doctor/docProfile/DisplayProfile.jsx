import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyDocProfile } from "../../../slices/profile";
import { useSelector, shallowEqual } from "react-redux";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import "./DisplayProfile.css";
import { PseudoBox, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import {
	CREATEPROFILE,
	DOCTOR_UPDATEPROFILE,
	UPDATEPROFILE,
} from "../../../constants/routes";
// import { CardBody, CardFooter } from "reactstrap";
import userPic from "../docProfile/53571.jpg";

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(13),
		height: theme.spacing(13),
		border: "4px solid #a8a8a8",
		borderBottomColor: "#15db95",
		borderRightColor: "#15db95",
		margin: "0 18%",
		marginTop: "1.6rem",
	},
}));
const DisplayProfile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyDocProfile());
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		document.body.classList.toggle("register-page");
		return () => {
			document.body.classList.toggle("register-page");
		};
	});
	const [width, setWidth] = React.useState(window.innerWidth);
	const classes = useStyles();
	const { auth, loading, myProfile } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
			myProfile: state.profile.myProfile,
		}),
		shallowEqual
	);
	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
	return (
		<div>
			{/* <Grid container justify="center" alignItems="center">
				<Grid item container md={6} sm={12} style={{ padding: "3rem" }}>
					{myProfile !== null ? (
						<Card
							className="card-register"
							style={{ border: "12px" }}
							style={{
								background:
									"linear-gradient(90deg, rgba(239,118,128,1) 43%, rgba(241,133,116,1) 82%)",
							}}
						>
							<CardHeader>
								<CardTitle
									tag="small"
									style={{
										fontSize: "3.5rem",
										lineHeight: "none",
									}}
								>
									My Profile
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Gender:{" "}
									</span>
									{myProfile.gender}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Blood Group:{" "}
									</span>
									{myProfile.bloodGroup}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Height:{" "}
									</span>
									{myProfile.height} m
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Weight:{" "}
									</span>
									{myProfile.weight} Kgs
								</Text>
								<Text fontSize="1.3rem" margin="10px">
									<span style={{ color: "#b00020" }}>
										Contact Number:{" "}
									</span>
									{myProfile.phoneNumber}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									color="#b00020"
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Medical Histories:
									</span>
								</Text>
								<Flex wrap="wrap">
									{myProfile.medicalHistory.map((item, i) => (
										<Text
											style={{ fontFamily: "Poppins" }}
											fontSize="1.2rem"
											margin="10px"
											key={i}
										>
											{myProfile.medicalHistory.length !==
											i + 1 ? (
												<Fragment>
													{item}
													{","}
												</Fragment>
											) : (
												<Fragment>{item}</Fragment>
											)}
										</Text>
									))}
								</Flex>
								<Text
									style={{ fontFamily: "Poppins" }}
									color="#b00020"
									fontSize="1.3rem"
									margin="10px"
								>
									<span style={{ color: "#b00020" }}>
										Deficiencies:
									</span>
								</Text>
								<Flex wrap="wrap">
									{myProfile.deficiency.map((item, i) => (
										<Text
											style={{ fontFamily: "Poppins" }}
											fontSize="1.2rem"
											margin="10px"
											key={i}
										>
											{myProfile.deficiency.length !==
											i + 1 ? (
												<Fragment>
													{item}
													{","}
												</Fragment>
											) : (
												<Fragment>{item}</Fragment>
											)}
										</Text>
									))}
								</Flex>
							</CardBody>

							<div style={{ padding: "1rem" }}>
								<Button className="btn-round" color="danger">
									<Link
										style={{
											textDecoration: "none",
											color: "white",
										}}
										to={UPDATEPROFILE}
									>
										<span>Update Profile</span>
									</Link>
								</Button>
							</div>
						</Card>
					) : (
						<Card
							className="card-register"
							style={{ border: "12px" }}
							style={{
								background:
									"linear-gradient(90deg, rgba(239,118,128,1) 43%, rgba(241,133,116,1) 82%)",
							}}
						>
							<CardHeader>
								<CardTitle
									tag="small"
									style={{
										fontSize: "3.5rem",
										lineHeight: "none",
									}}
								>
									My Profile
								</CardTitle>
							</CardHeader>
							<CardBody>
								<Text
									margin={{ sm: "0.5rem", md: "2rem" }}
									fontSize={{ sm: "1.5rem", md: "2.5rem" }}
									color="primary"
								>
									You have not created your profile yet!
								</Text>
							</CardBody>
							<div style={{ padding: "1rem" }}>
								<Button className="btn-round" color="danger">
									<Link
										style={{
											textDecoration: "none",
											color: "white",
										}}
										to={CREATEPROFILE}
									>
										<span>Create Profile</span>
									</Link>
								</Button>
							</div>
						</Card>
					)}
				</Grid>
			</Grid> */}

			{myProfile !== null && (
				<Grid container style={{ padding: "1rem" }}>
					<Grid item md={3} xs={12}>
						<div
							style={{
								paddingTop: "0.01rem",
								borderRadius: "12px",
								backgroundColor: "rgba(196, 194, 194, 0.30 )",
								width: "90%",
								marginRight: "auto",
								marginLeft: "auto",
								marginBottom: "1rem",
								paddingBottom: "0.1rem",
								marginTop: "1rem",
							}}
						>
							<div class="profile-box">
								<Grid container>
									<Grid item xs={4} md={12} align="center">
										<Avatar
											alt="Insert the name initial here"
											src="https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg"
											className={classes.large}
										/>
									</Grid>
									<Grid item xs={8} md={12}>
										<div
											style={{
												marginTop: "2rem",
												width: "auto",
												textAlign: "center",
											}}
										>
											<span class="profile-name">
												{" "}
												{auth.user.name}
											</span>
											<br></br>
											<span class="profile-email">
												{auth.user.email}
											</span>
										</div>
										<div style={{ textAlign: "center" }}>
											<Link
												style={{
													textDecoration: "none",
													color: "white",
												}}
												to={DOCTOR_UPDATEPROFILE}
											>
												<Button
													variant="contained"
													size="small"
													color="primary"
													style={{
														width: "7.6rem",
														marginBottom: "2rem",
														marginTop: "0.4rem",
														fontSize: "0.65rem",
													}}
												>
													<span>Update Profile</span>
												</Button>
											</Link>
										</div>
									</Grid>
								</Grid>
							</div>
						</div>
					</Grid>
					<Grid item style={{ marginRight: "-1rem" }} xs={12} md={9}>
						<div>
							<Typography
								style={{
									color: "gray",
									marginLeft: "2rem",
									marginTop: "3rem",
									fontSize: "1.7rem",
								}}
								variant="h5"
							>
								MY PROFILE
							</Typography>
							<hr
								style={{
									marginLeft: "2rem",
									width: "80%",
								}}
							></hr>
						</div>
						<Grid container>
							<Grid item xs={12}>
								<div style={{ marginLeft: "2rem" }}>
									<Typography
										className="label"
										style={{
											marginTop: "2rem",
											fontSize: "1.1rem",
										}}
										color="textSecondary"
									>
										Gender:
										<span
											class="text"
											style={{
												fontSize: "1.4rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.gender}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										Specialization:
										<span
											style={{
												fontSize: "1.3rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.specialization}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										License No.:{" "}
										<span
											style={{
												fontSize: "1.4rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.licenseNo}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<Typography
										className="label"
										color="textSecondary"
										style={{
											marginTop: "0.5rem",
											fontSize: "1.1rem",
										}}
									>
										Phone Number:
										<span
											style={{
												fontSize: "1.1rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.phoneNumber}
										</span>
									</Typography>
								</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			)}
		</div>
	);
};
export default DisplayProfile;
