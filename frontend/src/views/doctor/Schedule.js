import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	schedule: {
		height: "6.5rem",
		width: "83%",
		borderRadius: "8px",
		marginLeft: "2rem",
		marginTop: "1rem",
		float: "left",
		padding: "0.7rem",
		backgroundColor: "rgba(21,219,149,0.3)",
	},
	date: {
		height: "5.15rem",
		width: "5.3rem",
		textAlign: "center",
		backgroundColor: "rgba(21,219,149,0.5)",
		borderRadius: "8px",
		alignItems: "center",
	},
	dateIn: {
		fontSize: "2rem",
		paddingTop: "0.75rem",
		color: "#037d50",
		fontWeight: "bold",
	},
	month: {
		color: "#037d50",
		fontWeight: "bold",
	},
}));

const Schedule = () => {
	const classes = useStyles();

	return (
		<div className={classes.schedule}>
			<Grid container>
				<Grid item xs={4} md={2}>
					<div className={classes.date}>
						<div className={classes.dateIn}>12</div>
						<div className={classes.month}>MAR</div>
					</div>
				</Grid>
				<Grid item xs={8} md={9}>
					<div>
						<Typography style={{ fontSize: "1.1rem" }}>
							<b>Consultation</b>
						</Typography>
					</div>
					<div style={{ marginTop: "1.7rem", fontSize: "1rem" }}>
						<span>Sunday </span>
						<span style={{ float: "right", marginRight: "0.7rem" }}>
							9am - 11am
						</span>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Schedule;
