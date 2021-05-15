import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import "./Modal.css";
import {
	TextField,
	Grid,
	Typography,
	Paper,
	Button,
	Box,
} from "@material-ui/core";
import QRCode from "react-qr-code";
//Styling
const useStyles = makeStyles((theme) => ({
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},

}));

//Component
const PrescriptionQR = ({ handleClose, open,prescriptionId,index }) => {
	const classes = useStyles();
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className='qrView'
			open={open}
			onClose={(e)=>handleClose(e,index)}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Paper style={{
					margin:"auto 0",
					backgroundColor: "#f5f5f5"
					
				}}>
					<Grid
						// item
						container
						xs={12}
						justify='center'
					>
						<Grid
							item
							container
							xs={12}
							justify='space-between'
							className='modalHead'
						>
							<Grid item xs={10}>
								<Typography
									variant='h5'
									align='left'
									className='modalHeading'
								>
									Prescription QR Code
								</Typography>
							</Grid>
							<Grid item xs={2} align='right'>
								<IconButton
									aria-label='close'
									className='closeBtn'
									onClick={(e)=>handleClose(e,index)}
								>
									<CloseIcon />
								</IconButton>
							</Grid>
						</Grid>
						<Grid item xs={12} align="center" style={{padding : "1rem"}}>
						<QRCode
									size={200}
									
									value={prescriptionId}
								/>
								
						</Grid>
						<Grid item xs={12} align="center" style={{padding : "1rem", paddingTop:"0"}}>
						<Typography variant="button" className={classes.secondaryHeading}>
									SHOW QR CODE TO THE CHEMIST
								</Typography>
						</Grid>
					</Grid>
				</Paper>
			</Fade>
		</Modal>
	);
};

PrescriptionQR.propTypes = {};

export default PrescriptionQR;
