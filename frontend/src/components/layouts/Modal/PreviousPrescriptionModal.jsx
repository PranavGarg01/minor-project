import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Modal.css";
import PropTypes from "prop-types";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import { makeStyles } from "@material-ui/core/styles";
import {
	TextField,
	Grid,
	Typography,
	Paper,
	Button,
	Box,
} from "@material-ui/core";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	column: {
		flexBasis: "100%",
		padding: theme.spacing(0, 2),
	},
	columnHeader: {
		color: theme.palette.text.secondary,
		fontSize: theme.typography.pxToRem(15),
	},
	helper: {
		// borderLeft: `2px solid ${theme.palette.divider}`,
		// padding: theme.spacing(1, 2),
	},
}));

const PreviousPrescriptionModal = ({
	handleClose,
	handleOpen,
	open,
	prescriptions,
}) => {
	const [openList, setOpenList] = React.useState({});
	const classes = useStyles();
	const handleClick = (e, index) => {
		console.log(index);
		setOpenList((openList) => ({ ...openList, [index]: !openList[index] }));
	};
	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};
	const extractDate = (date) => {
		var date2 = new Date(date);
		var monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];
		var d = date2.getDate();
		var m = monthNames[date2.getMonth()];
		var y = date2.getFullYear();
		return [d, m, y];
	};
	return (
		<Modal
			aria-labelledby='transition-modal-title'
			aria-describedby='transition-modal-description'
			className='modal'
			open={open}
			onClose={handleClose}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<Paper className='sheetModal'>
					<Grid
						item
						container
						xs={12}
						justify='center'
						alignItems='center'
						spacing={1}
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
									Previous Prescriptions
								</Typography>
							</Grid>
							<Grid item xs={2} align='right'>
								<IconButton
									aria-label='close'
									className='closeBtn'
									onClick={handleClose}
								>
									<CloseIcon />
								</IconButton>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Divider />
							{prescriptions.map((rx, index) => (
								<Accordion
									expanded={expanded[index]}
									onChange={(e) => handleClick(e, index)}
								>
									<AccordionSummary
										expandIcon={<ExpandMoreIcon />}
									>
										<Grid container>
											<Grid item xs={12}>
												<Typography variant='subtitle1'>
													{`${
														extractDate(rx.date)[0]
													} ${
														extractDate(rx.date)[1]
													}, ${
														extractDate(rx.date)[2]
													}`}
												</Typography>
											</Grid>
											<Grid item xs={12}>
												<Typography
													className={
														classes.secondaryHeading
													}
												>
													{`Dr. ${rx.doctor.name}`}
												</Typography>
											</Grid>
										</Grid>
									</AccordionSummary>
									<AccordionDetails
									><Grid container spacing={1}>
										<Grid item xs={12} className={classes.column}>
											<Typography
												className={classes.columnHeader}
											>
												Examination
											</Typography>
											<Typography>
												{rx.examination}
											</Typography>
											<Divider />
										</Grid>
										<Grid item xs={12}
											className={clsx(
												classes.column,
												classes.helper
											)}
										>
											<Typography
												className={classes.columnHeader}
											>
												Medicines
											</Typography>
											<Typography
												style={{
													wordBreak: "break-all",
												}}
											>
												{rx.medicines}
											</Typography>
											<Divider />
										</Grid>
										<Grid item xs={12}
											className={clsx(
												classes.column,
												classes.helper
											)}
										>
											<Typography
												className={classes.columnHeader}
											>
												Follow Up Date
											</Typography>
											<Typography>
												{`${
													extractDate(rx.followUp)[0]
												} ${
													extractDate(rx.followUp)[1]
												}, ${
													extractDate(rx.followUp)[2]
												}`}
											</Typography>
										</Grid>
										</Grid>
									</AccordionDetails>
								</Accordion>
							))}
						</Grid>
					</Grid>
				</Paper>
			</Fade>
		</Modal>
	);
};

PreviousPrescriptionModal.propTypes = {};

export default PreviousPrescriptionModal;
