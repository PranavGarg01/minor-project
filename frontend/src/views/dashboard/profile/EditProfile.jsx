import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../../slices/alert";
import { editProfile, getMyProfile } from "../../../slices/profile";
import Image from "../../../assets/img/img-9.png";

import Loader from "../../../components/layouts/Loading";
import {
	historyArray,
	deficiencyArray,
	bloodGroupsArray,
} from "../../../constants/profile";
import {
	TextField,
	MenuItem,
	FormControl,
	Grid,
	InputLabel,
	Select,
	Input,
	Checkbox,
	ListItemText,
	Typography,
	Paper,
	Button,
} from "@material-ui/core";

const EditProfile = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({
		gender: "loading",
		bloodGroup: "loading",
		height: "loading",
		weight: "loading",
		phoneNumber: "loading",
		medicalHistory: ["loading"],
		deficiency: ["loading"],
	});
	const { loading, myProfile } = useSelector((state) => {
		return {
			loading: state.loading.loading,
			myProfile: state.profile.myProfile,
		};
	}, shallowEqual);
	useEffect(() => {
		dispatch(getMyProfile());
	}, []);
	useEffect(() => {
		if (myProfile !== null)
			setData({
				gender: myProfile.gender,
				bloodGroup: myProfile.bloodGroup,
				height: myProfile.height,
				weight: myProfile.weight,
				phoneNumber: myProfile.phoneNumber,
				medicalHistory: myProfile.medicalHistory,
				deficiency: myProfile.deficiency,
			});
	}, [myProfile]);

	const {
		gender,
		bloodGroup,
		height,
		weight,
		phoneNumber,
		deficiency,
		medicalHistory,
	} = data;
	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			gender === "" ||
			bloodGroup === "" ||
			height === "" ||
			weight === "" ||
			phoneNumber === "" ||
			medicalHistory.length === 0 ||
			deficiency.length === 0
		) {
			dispatch(setAlert("Please fill all the fields", "error"));
		} else if (phoneNumber.length !== 14) {
			dispatch(setAlert("Enter Valid Phone Number", "error"));
		} else {
			dispatch(editProfile(data, history));
			console.log(data);
		}
	};
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose2 = () => {
		setOpen2(false);
	};

	const handleOpen2 = () => {
		setOpen2(true);
	};

	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	return (
		<>
			{loading && <Loader />}
			{myProfile !== null && (
				<Grid container justify="center" alignItems="center">
					<Grid item container md={6} sm={12}>
						{/* <form onSubmit={onSubmit}> */}

						<Paper
							elevation={3}
							style={{
								padding: "3rem",
								width: "100%",
								minWidth: "80%",
								backgroundColor: "#CFEBFD",
								backgroundImage: `url(${Image})`,
								backgroundSize: "cover",
							}}
						>
							<Typography
								style={{
									fontSize: "3rem",
									lineHeight: "none",
									textAlign: "center",
									marginBottom: "2rem",
								}}
								color="primary"
							>
								UPDATE PROFILE
							</Typography>

							<form onSubmit={onSubmit} className="form">
								<Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "11px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
										>
											Gender
										</InputLabel>
										<Select
											fullWidth
											name="gender"
											open={open}
											onClose={handleClose}
											onOpen={handleOpen}
											value={gender}
											onChange={onChange}
										>
											<MenuItem value="male">
												Male
											</MenuItem>
											<MenuItem value="female">
												Female
											</MenuItem>
											<MenuItem value="others">
												Others
											</MenuItem>
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "11px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
										>
											Blood Group
										</InputLabel>
										<Select
											name="bloodGroup"
											open={open2}
											onClose={handleClose2}
											onOpen={handleOpen2}
											value={bloodGroup}
											onChange={onChange}
										>
											{bloodGroupsArray.map((item, i) => (
												<MenuItem key={i} value={item}>
													{item}
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="number"
										size="small"
										style={{ margin: "11px auto" }}
										fullWidth
										label={
											<span
												style={{
													fontFamily: "Poppins",
													fontWeight: "bold",
													fontSize: "1rem",
												}}
											>
												Height in meters
											</span>
										}
										name="height"
										value={height}
										onChange={onChange}
										placeholder="Height in meters"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="number"
										size="small"
										style={{ margin: "11px auto" }}
										fullWidth
										name="weight"
										label={
											<span
												style={{
													fontFamily: "Poppins",
													fontWeight: "bold",
													fontSize: "1rem",
												}}
											>
												Weight in Kgs
											</span>
										}
										value={weight}
										onChange={onChange}
										placeholder="Weight in Kgs"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
										size="small"
										style={{ margin: "11px auto" }}
										fullWidth
										label={
											<span
												style={{
													fontFamily: "Poppins",
													fontWeight: "bold",
													fontSize: "1rem",
												}}
											>
												Contact Number
											</span>
										}
										name="phoneNumber"
										value={phoneNumber}
										onChange={onChange}
										placeholder="eg: +91-1234567893"
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "18px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
											id="demo-mutiple-name-label"
										>
											Medical History
										</InputLabel>
										<Select
											multiple
											variant="outlined"
											name="medicalHistory"
											value={medicalHistory}
											renderValue={(selected) =>
												selected.join(", ")
											}
											onChange={onChange}
											input={<Input />}
											MenuProps={MenuProps}
										>
											{historyArray.map((history) => (
												<MenuItem
													key={history}
													value={history}
												>
													<Checkbox
														checked={
															medicalHistory.indexOf(
																history
															) > -1
														}
													/>
													<ListItemText
														primary={history}
													/>
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>
								<Grid item xs={12}>
									<FormControl
										style={{
											width: "100%",
											margin: "18px auto",
										}}
									>
										<InputLabel
											style={{
												fontFamily: "Poppins",
												fontWeight: "bold",
												fontSize: "1rem",
											}}
											id="demo-mutiple-name-label"
										>
											Deficiency
										</InputLabel>
										<Select
											multiple
											variant="outlined"
											name="deficiency"
											value={deficiency}
											renderValue={(selected) =>
												selected.join(", ")
											}
											onChange={onChange}
											input={<Input />}
											MenuProps={MenuProps}
										>
											{deficiencyArray.map((allergy) => (
												<MenuItem
													key={allergy}
													value={allergy}
												>
													<Checkbox
														checked={
															deficiency.indexOf(
																allergy
															) > -1
														}
													/>
													<ListItemText
														primary={allergy}
													/>
												</MenuItem>
											))}
										</Select>
									</FormControl>
								</Grid>

								<div>
									<Button
										type="submit"
										style={{
											width: "100%",
											marginTop: "2rem",
										}}
										variant="contained"
										color="primary"
									>
										UPDATE
									</Button>
								</div>
							</form>
						</Paper>
					</Grid>
				</Grid>
			)}
		</>
	);
};

export default EditProfile;
