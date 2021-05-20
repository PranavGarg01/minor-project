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
		// <Grid container>
		// 	<Grid className="paperGrid" item container md={6} xs={12}>
		// 		<Paper
		// 			elevation={3}
		// 			className="paperback"
		// 			style={{
		// 				width: "100%",
		// 				minWidth: "80%",
		// 				backgroundColor: "white",
		// 			}}
		// 		>
		// 			<Grid container style={{ minWidth: "100%" }}>
		// 				{scanned ? (
		// 					!loading && (
		// 						<Typography>{prescription._id}</Typography>
		// 					)
		// 				) : (
		// 					<Typography>
		// 						<Grid item xs={12}>
		// 							<Typography
		// 								variant="h4"
		// 								style={{
		// 									lineHeight: "none",

		// 									marginBottom: "1rem",
		// 								}}
		// 								color="primary"
		// 							>
		// 								<Box fontWeight="fontWeightBold" m={1}>
		// 									Read Prescription
		// 								</Box>
		// 							</Typography>
		// 						</Grid>

		// 						<Grid item xs={12}>
		// 							<div className="sheet">
		// 								<QrReader
		// 									delay={300}
		// 									onError={handleError}
		// 									onScan={onScan}
		// 									className="reader"
		// 									facingMode="environment"
		// 								/>
		// 							</div>
		// 						</Grid>
		// 						<Grid item xs={12}>
		// 							<Typography variant="button">
		// 								Scan the Precription QR Code on the
		// 								pateint's app to view the prescription
		// 							</Typography>
		// 						</Grid>
		// 					</Typography>
		// 				)}
		// 			</Grid>
		// 		</Paper>
		// 	</Grid>
		// </Grid>

		<div style={{ marginTop: "4rem" }}>
			{scanned ? (
				!loading && <Typography>{prescription._id}</Typography>
			) : (
				<Typography>
					<Grid item xs={12} align="center">
						<Typography
							variant="h4"
							style={{
								lineHeight: "none",
								marginBottom: "2rem",
							}}
							color="primary"
						>
							<Box fontWeight="fontWeightBold" m={1}>
								Read Prescription
							</Box>
						</Typography>
					</Grid>

					<Grid item xs={12} align="center">
						<div style={{ maxWidth: "360px" }}>
							<QrReader
								delay={300}
								onError={handleError}
								onScan={onScan}
								facingMode="environment"
								className="reader"
							/>
						</div>
					</Grid>
					<Grid
						item
						xs={12}
						align="center"
						style={{ maxWidth: "380px", margin: "2rem auto" }}
					>
						<Typography variant="button">
							Scan the Precription QR Code on the pateint's app to
							view the prescription
						</Typography>
					</Grid>
				</Typography>
			)}
		</div>
	);
};

export default Chemist;
