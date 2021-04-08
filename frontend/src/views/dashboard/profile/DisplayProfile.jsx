import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../../../slices/profile";
import { useSelector, shallowEqual } from "react-redux";
import { PseudoBox, Flex, Text } from "@chakra-ui/core";
import { Link } from "react-router-dom";
import { CREATEPROFILE, UPDATEPROFILE } from "../../../constants/routes";
// import { CardBody, CardFooter } from "reactstrap";
import sqimg from "../../../assets/img/square-purple-1.png";
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	CardImg,
	CardTitle,
	Label,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from "reactstrap";
import { Grid } from "@material-ui/core";
const DisplayProfile = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getMyProfile());
		//eslint-disable-next-line
	}, []);
	const { myProfile } = useSelector((state) => {
		return {
			myProfile: state.profile.myProfile,
		};
	}, shallowEqual);

	useEffect(() => {
		document.body.classList.toggle("register-page");
		return () => {
			document.body.classList.toggle("register-page");
		};
	});
	const [width, setWidth] = React.useState(window.innerWidth);

	React.useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);
	return (
		<div>
			<Grid container justify='center' alignItems='center'>
				<Grid item container md={6} sm={12} style={{ padding: "3rem" }}>
					{myProfile !== null ? (
						<Card
							className='card-register'
							style={{ border: "12px" }}
							style={{
								background:
									// 'linear-gradient(90deg, rgba(255,141,114,1) 43%, rgba(253,118,93,1) 82%)',
									"linear-gradient(90deg, rgba(239,118,128,1) 43%, rgba(241,133,116,1) 82%)",
							}}
						>
							<CardHeader>
								{/* <CardImg
                  alt='...'
                  src={sqimg}
                /> */}
								<CardTitle
									tag='small'
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
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Gender:{" "}
									</span>
									{myProfile.gender}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Blood Group:{" "}
									</span>
									{myProfile.bloodGroup}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Height:{" "}
									</span>
									{myProfile.height} m
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Weight:{" "}
									</span>
									{myProfile.weight} Kgs
								</Text>
								<Text fontSize='1.3rem' margin='10px'>
									<span style={{ color: "#b00020" }}>
										Contact Number:{" "}
									</span>
									{myProfile.phoneNumber}
								</Text>
								<Text
									style={{ fontFamily: "Poppins" }}
									color='#b00020'
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Medical Histories:
									</span>
								</Text>
								<Flex wrap='wrap'>
									{myProfile.medicalHistory.map((item, i) => (
										<Text
											style={{ fontFamily: "Poppins" }}
											fontSize='1.2rem'
											margin='10px'
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
									color='#b00020'
									fontSize='1.3rem'
									margin='10px'
								>
									<span style={{ color: "#b00020" }}>
										Deficiencies:
									</span>
								</Text>
								<Flex wrap='wrap'>
									{myProfile.deficiency.map((item, i) => (
										<Text
											style={{ fontFamily: "Poppins" }}
											fontSize='1.2rem'
											margin='10px'
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
							{/* <CardFooter> */}
							<div style={{ padding: "1rem" }}>
								<Button className='btn-round' color='danger'>
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
							{/* </CardFooter> */}
						</Card>
					) : (
						<Card
							className='card-register'
							style={{ border: "12px" }}
							style={{
								background:
									// 'linear-gradient(90deg, rgba(255,141,114,1) 43%, rgba(253,118,93,1) 82%)',
									"linear-gradient(90deg, rgba(239,118,128,1) 43%, rgba(241,133,116,1) 82%)",
							}}
						>
							<CardHeader>
								{/* <CardImg
                  alt='...'
                  src={require('../../../assets/img/square-purple-1.png')}
                /> */}
								<CardTitle
									tag='small'
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
									color='primary'
								>
									You have not created your profile yet!
								</Text>
							</CardBody>
							<div style={{ padding: "1rem" }}>
								<Button className='btn-round' color='danger'>
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
			</Grid>
		</div>
	);
};

export default DisplayProfile;
