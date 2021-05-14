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

const Schedule = ({date, doctorName, specialization, phoneNumber,examine}) => {
	const classes = useStyles();
	//DATE Calculation 
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
		var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
		var d = date2.getDate();
		var m = monthNames[date2.getMonth()];
		var y = date2.getFullYear();
		var day = days[date2.getDay()]
		return [d, m, y,day];
	};
	return (
		<div className={classes.schedule}>
			<Grid container>
				<Grid item xs={4} md={2}>
					<div className={classes.date}>
						<div className={classes.dateIn}>{extractDate(date)[0]}</div>
						<div className={classes.month}>{extractDate(date)[1]}</div>
					</div>
				</Grid>
				<Grid item xs={8} md={9}>
					<div>
						<Typography style={{ fontSize: "1.1rem" }}>
							<b>{doctorName}</b>
						</Typography>
					</div>
					<div style={{ marginTop: "1.7rem", fontSize: "1rem" }}>
						<span>{phoneNumber} </span>
						<span style={{ float: "right", marginRight: "0.7rem" }}>
						{extractDate(date)[3]}
						</span>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Schedule;
