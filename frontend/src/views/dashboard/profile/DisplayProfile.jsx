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
					<Grid
						item
						md={3}
						style={{
							marginTop: "1rem",
							marginLeft: "1rem",
							borderRadius: "12px",
							backgroundColor: "rgba(196, 194, 194, 0.30 )",
						}}
						xs={12}
					>
						<div>
							<div class='profile-box'>
								<Avatar
									alt='Insert the name initial here'
									src='https://m.cricbuzz.com/a/img/v1/192x192/i1/c170661/virat-kohli.jpg'
									className={classes.large}
								/>
								<span class='profile-name'>
									{" "}
									{auth.user.name}
								</span>
								<br></br>
								<span class='profile-email'>
									{auth.user.email}
								</span>
								<div>
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
								</div>
								<Link
									style={{
										textDecoration: "none",
										color: "white",
									}}
									to={UPDATEPROFILE}
								>
									<Button
										variant='contained'
										color='primary'
										style={{
											width: "70%",
											marginBottom: "3rem",
										}}
									>
										<span>Update Profile</span>
									</Button>
								</Link>
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
								}}
								variant='h4'
							>
								MY PROFILE
							</Typography>
							<hr
								style={{
									marginLeft: "2rem",
									width: "94%",
								}}
							></hr>
						</div>
						<Grid container>
							<Grid item xs={12} md={6}>
								<div style={{ marginLeft: "2rem" }}>
									<Typography
										style={{ marginTop: "3rem" }}
										color='textSecondary'
										variant='h5'
									>
										Gender:
										<span
											style={{
												fontSize: "2.5rem",
												marginLeft: "6rem",
												color: "#2F4F4F",
											}}
										>
											{myProfile.gender}
										</span>
									</Typography>
									<Typography
										style={{ marginTop: "2.5rem" }}
										color='textSecondary'
										variant='h5'
									>
										Blood Group:
										<span
											style={{
												fontSize: "2.5rem",
												marginLeft: "2.5rem",
												color: "#2F4F4F",
											}}
										>
											{myProfile.bloodGroup}
										</span>
									</Typography>
									<Typography
										style={{ marginTop: "2.5rem" }}
										color='textSecondary'
										variant='h5'
									>
										Height:
										<span
											style={{
												fontSize: "2.5rem",
												marginLeft: "6.3rem",
												color: "#2F4F4F",
											}}
										>
											{myProfile.height}
										</span>
									</Typography>
									<Typography
										style={{ marginTop: "2.5rem" }}
										color='textSecondary'
										variant='h5'
									>
										Weight:
										<span
											style={{
												fontSize: "2.5rem",
												marginLeft: "6.4rem",
												color: "#2F4F4F",
											}}
										>
											{myProfile.weight}
										</span>
									</Typography>
									<Typography
										style={{ marginTop: "2.5rem" }}
										color='textSecondary'
										variant='h5'
									>
										Phone Number:
										<span
											style={{
												fontSize: "2rem",
												marginLeft: "0.4em",
												color: "#2F4F4F",
											}}
										>
											{myProfile.phoneNumber}
										</span>
									</Typography>
								</div>
							</Grid>

							<Grid item xs={12} md={6}>
								<div style={{ marginLeft: "2rem" }}>
									<Typography
										style={{
											marginTop: "3.5rem",
										}}
										color='textSecondary'
										variant='h5'
									>
										Medical Histories:
										<span
											style={{
												marginLeft: "6rem",
											}}
										>
											{myProfile.medicalHistory.map(
												(item, i) => (
													<Typography
														style={{
															color: "#2F4F4F",
															fontSize: "2rem",
														}}
													>
														{myProfile
															.medicalHistory
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
									</Typography>
									<Typography
										style={{ marginTop: "4rem" }}
										color='textSecondary'
										variant='h5'
									>
										Deficiencies:
										<span
											style={{
												marginLeft: "6rem",
											}}
										>
											{myProfile.deficiency.map(
												(item, i) => (
													<Typography
														style={{
															fontSize: "2rem",
															color: "#2F4F4F",
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
											)}
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
