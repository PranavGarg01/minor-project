import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useHistory } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import { makeStyles } from "@material-ui/core/styles";
import "./Modal.css";
import {
	TextField,
	Grid,
	Typography,
	Paper,
	Button,
	Box,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
	list:{
		backgroundColor:"white"
	}
}));
const MedicalHistoryModal = ({
	handleClose,
	handleOpen,
	open,
	medicalHistory,
	deficiency,
}) => {
	const classes = useStyles();
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
									Medical History
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
						<Divider/>
							<List component='nav' className={classes.list} aria-label='medicalHistory'>
								<ListItem>
									<ListItemText primary='Problems' secondary="All the previous medical problems reported by the patient"/>
								</ListItem>
								{medicalHistory.map((mh,index)=><> <Divider variant="inset"/> <ListItem>
									<ListItemText
									key={index}
										inset
										primary={mh}
									/>
								</ListItem></>)}
							</List>
						</Grid>
						<Grid item xs={12}>
						<Divider/>
							<List component='nav' className={classes.list} aria-label='medicalHistory'>
								<ListItem>
									<ListItemText primary='Nutritional Deficiency' secondary="All the nutritional deficiencies reported by the patient"/>
								</ListItem>
								{deficiency.map((deficiency,index)=><> <Divider variant="inset"/> <ListItem>
									<ListItemText
										key={index}
										inset
										primary={deficiency}
									/>
								</ListItem></>)}
							</List>
						</Grid>
					</Grid>
				</Paper>
			</Fade>
		</Modal>
	);
};

export default MedicalHistoryModal;
