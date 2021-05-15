import React from "react";
import QrReader from "react-qr-reader";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import "./Chemist.css";
import {
	TextField,
	Grid,
	Typography,
	Paper,
	Button,
	Box,
} from "@material-ui/core";
import { useState } from "react";
import { getPrescriptionById } from "../../slices/prescription";
import { useHistory } from "react-router";
const Chemist = () => {
	const { prescription, loading } = useSelector(
		(state) => ({
			prescription: state.prescription.prescription,
			loading: state.loading.loading,
		}),
		shallowEqual
	);
	const [scanned, setScanned] = useState(false);
	const dispatch = useDispatch();
	const history = useHistory();
	const onScan = (scan) => {
		if (scan) {
			console.log(scan);
			dispatch(getPrescriptionById(scan));
			setScanned(true);
			history.push(`/prescription/${scan}`);
		}
	};
	const handleError = (err) => {
		console.log(err);
	};
	return (
		<Grid container justify='center' alignItems='center'>
			<Grid
				className='paperGrid'
				item
				xs
				container
				direction='column'
				// spacing={2}
				md={6}
				sm={12}
				justify='space-between'
			>
				<Paper
					elevation={3}
					className='paperback'
					style={{
						// padding: "5%",
						// paddingRight: " 3%",
						width: "100%",
						minWidth: "80%",
						backgroundColor: "white",
					}}
				>
					<Grid
						container
						// direction='column'
						spacing={2}
						// md={6}
						// sm={12}
						style={{ minWidth: "100%" }}
						justify='space-between'
					>
						{scanned ? (
							!loading && (
								<Typography>{prescription._id}</Typography>
							)
						) : (
							<Typography>
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
											Read Prescription
										</Box>
									</Typography>
								</Grid>

								<Grid item xs={12}>
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
								</Grid>
								<Grid item xs={12} align='center'>
									<Typography variant='button'>
										Scan the Precription QR Code on the
										pateint's app to view the prescription
									</Typography>
								</Grid>
							</Typography>
						)}
					</Grid>
				</Paper>
			</Grid>
		</Grid>
	);
};

export default Chemist;
