import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import { setAlert } from "../../slices/alert";
import { editProfile, getMyProfile } from "../../slices/profile";
import Loader from "../../components/layouts/Loading";
import Image from "../../assets/img/img-9.png";
import Icon from "@material-ui/core/Icon";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import QrReader from "react-qr-reader";
import "./NewPrescription.css";
import {
	TextField,
	Grid,
	Typography,
	Paper,
	Button,
	Box,
} from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { getUserDetails } from "../../slices/prescription";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import auth from "../../slices/auth";
import { createPrescription } from "../../slices/prescription";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
	disabledd: {
		"& .MuiInputBase-root.Mui-disabled": {
			color: "rgba(0,0,0,0.56)",
		},
	},
	modal: {
		display: "flex",
		alignItems: "center",
		// marginTop : "25%",
		justifyContent: "center",
	},
}));
const NewPrescription = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const [data, setData] = useState({
		uuid: "",
		name: "",
		height: "",
		weight: "",
		gender: "",
		bloodGroup: "",
		examination: "",
		medicines: "",
		followUp: new Date(2021, 4, 7),
	});

	const { prescription, loading, auth } = useSelector(
		(state) => ({
			auth: state.auth,
			prescription: state.prescription.prescription,
			loading: state.loading.loading,
		}),
		shallowEqual
	);
	const {
		uuid,
		name,
		height,
		weight,
		gender,
		bloodGroup,
		examination,
		medicines,
		followUp,
	} = data;
	const onChange = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	useEffect(() => {
		if (prescription !== null)
			setData({
				...data,
				name: prescription.user.user.name,
				height: prescription.user.profile.height,
				weight: prescription.user.profile.weight,
				gender: prescription.user.profile.gender,
				bloodGroup: prescription.user.profile.bloodGroup,
			});
	}, [prescription]);
	const onSubmit = (e) => {
		e.preventDefault();
		console.log("ha");
		const formData = {
			doctor: auth.user._id,
			user: prescription.user.user._id,
			medicines,
			examination,
			followUp,
		};
		dispatch(createPrescription(formData, history));
	};

	// QR CODE
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const onScan = (scan) => {
		if (scan) {
			console.log(scan);
			handleClose();
			setData({ ...data, uuid: scan });
			dispatch(getUserDetails(scan));
		}
	};
	const handleError = (err) => {
		console.log(err);
	};

	//DATE PICKER
	const handleDateChange = (date) => {
		setData({ ...data, followUp: date });
	};
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<form onSubmit={onSubmit}>
				<Grid container justify='center' alignItems='center'>
					<Grid
						item
						xs
						container
						direction='column'
						spacing={2}
						md={6}
						sm={12}
						style={{ margin: "2rem auto" }}
						justify='space-between'
					>
						<Paper
							elevation={3}
							style={{
								padding: "5%",
								width: "100%",
								minWidth: "80%",
								backgroundColor: "#CFEBFD",
								backgroundImage: `url(${Image})`,
								backgroundSize: "cover",
							}}
						>
							<Grid
								xs
								container
								direction='column'
								spacing={2}
								md={6}
								sm={12}
								style={{ minWidth: "100%" }}
								justify='space-between'
							>
								<Grid item xs={12} align='center'>
									<Typography
										variant='h4'
										style={{
											lineHeight: "none",

											marginBottom: "1rem",
										}}
										color='primary'
									>
										<Box fontWeight='fontWeightBold' m={1}>
											New Prescription
										</Box>
									</Typography>
								</Grid>
								{/* First Row */}
								<Grid item xs={12}>
									<Grid
										container
										justify='space-between'
										spacing={1}
									>
										<Grid item xs={8}>
											<TextField
												type='text'
												size='medium'
												fullWidth
												label={
													<span
														style={{
															fontWeight: "bold",
														}}
													>
														Patient's Unique ID
													</span>
												}
												name='uuid'
												value={uuid}
												onChange={onChange}
												placeholder="Patient's Unique ID"
												variant='outlined'
											/>
										</Grid>
										<Grid item xs={4}>
											<Button
												variant='contained'
												color='primary'
												style={{
													minWidth: "0",
													height: "95%",
													float: "left",
													width: "47%",
												}}
												startIcon={<Icon>search</Icon>}
												onClick={() =>
													dispatch(
														getUserDetails(uuid)
													)
												}
											></Button>

											<Button
												variant='contained'
												color='primary'
												style={{
													minWidth: "0",
													width: "47%",
													height: "95%",
													float: "right",
													fontWeight: "bold",
													fontSize: "1rem",
												}}
												// startIcon={<Icon>search</Icon>}
												onClick={handleOpen}
											>
												QR
											</Button>
										</Grid>
									</Grid>
								</Grid>
								<Grid item xs={12}>
									<Typography
										variant='h6'
										display='block'
										align='center'
									>
										<Box fontWeight='fontWeightBold'>
											Fill Details
										</Box>
									</Typography>
								</Grid>
								{/* 2nd row */}
								<Grid item xs={12}>
									<TextField
										type='text'
										size='medium'
										fullWidth
										disabled={true}
										label={
											<span
												style={{
													fontWeight: "bold",
													fontSize: "1rem",
													color: "rgba(0,0,0,0.7)",
												}}
											>
												Patient Name
											</span>
										}
										className={classes.disabledd}
										name='name'
										value={name}
										placeholder="Patient's Name"
										variant='outlined'
									/>
								</Grid>
								{/* 3rd Row */}
								<Grid
									item
									container
									xs={12}
									justify='space-between'
									fullWidth
									spacing={1}
									style={{ paddingRight: "0" }}
								>
									<Grid item xs={6}>
										<TextField
											type='text'
											size='medium'
											fullWidth
											disabled={true}
											label={
												<span
													style={{
														fontWeight: "bold",
														color:
															"rgba(0,0,0,0.7)",
													}}
												>
													Height
												</span>
											}
											className={classes.disabledd}
											name='height'
											value={height}
											placeholder='Height'
											variant='outlined'
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											type='text'
											size='medium'
											fullWidth
											disabled={true}
											label={
												<span
													style={{
														fontWeight: "bold",
														color:
															"rgba(0,0,0,0.7)",
													}}
												>
													Weight
												</span>
											}
											name='weight'
											value={weight}
											placeholder='Weight'
											variant='outlined'
										/>
									</Grid>
								</Grid>
								{/* 4th Row */}
								<Grid
									item
									container
									direction='row'
									xs={12}
									justify='space-between'
									fullWidth
									spacing={1}
									style={{ paddingRight: "0" }}
								>
									<Grid item xs={6}>
										<TextField
											type='text'
											size='medium'
											fullWidth
											disabled={true}
											label={
												<span
													style={{
														fontWeight: "bold",
														color:
															"rgba(0,0,0,0.7)",
													}}
												>
													Gender
												</span>
											}
											className={classes.disabledd}
											name='gender'
											value={gender}
											placeholder='Gender'
											variant='outlined'
										/>
									</Grid>
									<Grid item xs={6}>
										<TextField
											type='text'
											size='medium'
											fullWidth
											disabled={true}
											label={
												<span
													style={{
														fontWeight: "bold",
														color:
															"rgba(0,0,0,0.7)",
													}}
												>
													Blood Group
												</span>
											}
											name='bloodGroup'
											value={bloodGroup}
											placeholder='Blood Group'
											variant='outlined'
										/>
									</Grid>
								</Grid>
								{/* 5th Row */}
								<Grid item xs={12}>
									<TextField
										type='text'
										size='medium'
										fullWidth
										multiline
										rows={3}
										label={
											<span
												style={{
													fontWeight: "bold",
												}}
											>
												Examination
											</span>
										}
										name='examination'
										value={examination}
										onChange={onChange}
										placeholder='Examination'
										variant='outlined'
									/>
								</Grid>
								{/* 6th row */}
								<Grid item xs={12}>
									<TextField
										type='text'
										size='medium'
										fullWidth
										multiline
										rows={3}
										label={
											<span
												style={{
													fontWeight: "bold",
												}}
											>
												Medicines
											</span>
										}
										name='medicines'
										value={medicines}
										onChange={onChange}
										placeholder='Medicines'
										variant='outlined'
									/>
								</Grid>
								{/* 7th row */}
								<Grid
									item
									container
									justify='space-between'
									spacing={2}
									xs={12}
									style={{ paddingRight: "0" }}
								>
									<Grid item xs={12} md={5}>
										<KeyboardDatePicker
											fullWidth
											id='date-picker-dialog'
											label='Follow Up Date'
											format='MM/dd/yyyy'
											value={followUp}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												"aria-label": "change date",
											}}
										/>
									</Grid>
									<Grid
										item
										xs={12}
										md={3}
										style={{ paddingRight: "0" }}
										align='center'
									>
										<Button
											variant='contained'
											color='primary'
											// fullWidth
											style={{
												minWidth: "0",
												fontSize: "1rem",
												height: "100%",
											}}
											startIcon={<CloudUploadIcon />}
											type='submit'
										>
											Upload
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</form>
			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className='sheet'>
						<QrReader
							delay={300}
							onError={handleError}
							align='center'
							onScan={onScan}
							className='reader'
							facingMode='environment'
						/>
					</div>
				</Fade>
			</Modal>
		</MuiPickersUtilsProvider>
	);
};

NewPrescription.propTypes = {};

export default NewPrescription;
