import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../../slices/profile";
import { useSelector, shallowEqual } from "react-redux";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Avatar, Button, Grid, Typography } from "@material-ui/core";
import "./DisplayProfile.css";
import { PseudoBox, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { CREATEPROFILE, UPDATEPROFILE } from "../../../constants/routes";
import sqimg from "../../../assets/img/square-purple-1.png";

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
		dispatch(getMyProfile());
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
												to={UPDATEPROFILE}
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

								{/* <div>
									<div class='bmi-card'>
										<Typography
											variant='h5'
											style={{ paddingTop: "1.5rem" }}
										>
											Your BMI is
										</Typography>
										<Typography
											variant='h1'
											style={{ marginTop: "0.5rem" }}
										>
											21.6
										</Typography>
									</div>
								</div> */}
							</div>
						</div>
					</Grid>
					<Grid item style={{ marginRight: "-1rem" }} xs={12} md={9}>
						<div>
							<Typography
								style={{
									color: "gray",
									marginLeft: "2rem",
									marginTop: "1rem",
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
												fontSize: "1.5rem",
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
										Blood Group:
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.bloodGroup}
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
										Height:
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.height}
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
										Weight:
										<span
											style={{
												fontSize: "1.5rem",
												color: "#2F4F4F",
												float: "right",
												marginRight: "11%",
											}}
										>
											{myProfile.weight}
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
												marginTop: "0.4rem",
												marginBottom: "0.4rem",
											}}
										>
											{myProfile.phoneNumber}
										</span>
									</Typography>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
								</div>
							</Grid>

							<Grid item xs={12}>
								<div
									style={{
										marginLeft: "2rem",
										marginTop: "0.8rem",
									}}
								>
									<span>
										<Typography
											style={{
												fontSize: "1.1rem",
												float: "left",
											}}
											className="label"
											color="textSecondary"
										>
											Medical Histories:
										</Typography>
									</span>
									<span>
										{myProfile.medicalHistory.map(
											(item, i) => (
												<Typography
													style={{
														fontSize: "1.15rem",
														color: "#2F4F4F",
														marginRight: "11%",
														textAlign: "right",
														width: "40%",
														float: "right",
													}}
												>
													{myProfile.medicalHistory
														.length !==
													i + 1 ? (
														<Fragment>
															{item}
															{","}
														</Fragment>
													) : (
														<Fragment>
															{item}
														</Fragment>
													)}
												</Typography>
											)
										)}
									</span>
									<hr
										style={{
											marginLeft: "0rem",
											width: "89%",
										}}
									></hr>
									<div style={{ marginTop: "0.8rem" }}>
										<span>
											<Typography
												className="label"
												style={{
													fontSize: "1.1rem",
													float: "left",
												}}
												color="textSecondary"
											>
												Deficiencies:
											</Typography>
										</span>
										<span style={{}}>
											{myProfile.deficiency.map(
												(item, i) => (
													<Typography
														style={{
															fontSize: "1.15rem",
															color: "#2F4F4F",
															marginRight: "11%",
															textAlign: "right",
															width: "50%",
															float: "right",
														}}
													>
														{myProfile.deficiency
															.length !==
														i + 1 ? (
															<Fragment>
																{item}
																{","}
															</Fragment>
														) : (
															<Fragment>
																{item}
															</Fragment>
														)}
													</Typography>
												)
											)}{" "}
										</span>{" "}
									</div>
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
