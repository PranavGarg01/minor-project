import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../../slices/alert";
import { editDocProfile, getMyDocProfile } from "../../../slices/profile";
import Image from "../../dashboard/img-9.png";

import Loader from "../../../components/layouts/Loading";
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
		phoneNumber: "loading",
		specialization: "loading",
		licenseNo: "loading",
	});
	const { loading, myProfile } = useSelector((state) => {
		return {
			loading: state.loading.loading,
			myProfile: state.profile.myProfile,
		};
	}, shallowEqual);
	useEffect(() => {
		dispatch(getMyDocProfile());
	}, []);
	useEffect(() => {
		if (myProfile !== null)
			setData({
				gender: myProfile.gender,
				phoneNumber: myProfile.phoneNumber,
				specialization: myProfile.specialization,
				licenseNo: myProfile.licenseNo,
			});
	}, [myProfile]);

	const { gender, specialization, phoneNumber, licenseNo } = data;
	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (
			gender === "" ||
			licenseNo === "" ||
			specialization === "" ||
			phoneNumber === ""
		) {
			dispatch(setAlert("Please fill all the fields", "error"));
		} else if (phoneNumber.length !== 14) {
			dispatch(setAlert("Enter Valid Phone Number", "error"));
		} else {
			dispatch(editDocProfile(data, history));
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
									marginBottom: "3.5rem",
									marginTop: "1rem",
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
												License No.
											</span>
										}
										name="licenseNo"
										value={licenseNo}
										onChange={onChange}
										placeholder="License No."
										variant="outlined"
									/>
								</Grid>
								<Grid item xs={12}>
									<TextField
										type="text"
										size="small"
										style={{ margin: "11px auto" }}
										fullWidth
										name="specialization"
										label={
											<span
												style={{
													fontFamily: "Poppins",
													fontWeight: "bold",
													fontSize: "1rem",
												}}
											>
												specialization
											</span>
										}
										value={specialization}
										onChange={onChange}
										placeholder="specialization"
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
								<div>
									<Button
										type="submit"
										style={{
											width: "100%",
											marginTop: "2rem",
											marginBottom: "7rem",
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
