import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import QRCode from "react-qr-code";
import Loading from "../../components/layouts/Loading";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { Avatar, Grid, Paper, Typography } from "@material-ui/core";
import userPic from "../../assets/img/53571.jpg";
const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(13),
		height: theme.spacing(13),
		margin: "0.5rem auto",
		marginBottom:"0"
	},
	uuid: {
		color : "#045de9"
	},
}));
const GenerateQR = () => {
	const classes = useStyles();
	const { loading, auth } = useSelector(
		(state) => ({
			auth: state.auth,
			loading: state.loading.loading,
		}),
		shallowEqual
	);
	return (
		<>
			{loading && <Loading />}
			{auth.user !== null && (
				<Grid
					item
					xs
					container
					direction='column'
					spacing={2}
					md={3}
					xs={10}
					sm={6}
					style={{ margin: "2rem auto" }}
					justify='space-between'
				>
					<Grid item xs={12} style={{paddingBottom:"0"}}>
						<Avatar
							alt='Insert the name initial here'
							src={userPic}
							className={classes.large}
						/>
					</Grid>
					<Grid item xs={12} align='center' style={{paddingBottom:"5%"}}>
						<Typography variant='h6' style={{ fontWeight: "bold" }}>
							{auth.user.name}
						</Typography>
					</Grid>
					<Paper
						elevation={3}
						style={{
							paddingTop: "7%",
							paddingBottom: "2%",
							width: "100%",
							minWidth: "50%",
							borderRadius: "2rem",
						}}
					>
						<Grid
							container
							justify='space-around'
							alignContent='center'
							spacing={1}
						>
							{/* <Grid item xs={12} align='center'>
								<Typography variant="button" style={{fontWeight:"500", fontSize:"1em"}}> Show this QR Code to the doctor</Typography> 
							</Grid> */}
							<Grid item xs={12} align='center'>
								<QRCode
									size={200}
									
									value={auth.user.uuid}
								/>
							</Grid>
							<Grid item xs={12} align='center' >
								<Typography
									variant='button'
									className={classes.uuid}
									style={{ fontSize:"1rem" }}
								>
									UNIQUE ID : {auth.user.uuid}
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			)}
		</>
	);
};

export default GenerateQR;
