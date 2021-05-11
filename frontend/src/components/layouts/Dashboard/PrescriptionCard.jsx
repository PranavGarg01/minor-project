import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PrescriptionQR from "../Modal/PrescriptionQR";

const useStyles = makeStyles({
	root: {
		minWidth: 280,
		maxWidth: 480,

		marginRight: 45,
		marginLeft: 45,
		marginTop: 40,
		borderRadius: 8,
		marginBottom: 40,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const PrescriptionCard = (props) => {
	const classes = useStyles();
	const {examination,date, doctorName,doctorSpeciality,id} = props;
	var date2 = new Date(date);
	var monthNames = [
		"Jan", "Feb", "Mar",
		"Apr", "May", "Jun", "Jul",
		"Aug", "Sep", "Oct",
		"Nov", "Dec"
	 ];
   var d = date2.getDate();
   var m = monthNames[date2.getMonth()];
   var y = date2.getFullYear();
   const [open2, setOpen2] = React.useState(false);

	const handleOpen2 = () => {
		setOpen2(true);
	};

	const handleClose2 = () => {
		setOpen2(false);
	};
	return (
		<div>
			<Card elevation={4} className={classes.root}>
				<CardContent>
					<Typography
						variant="h3"
						component="h2"
						style={{
							backgroundColor: "#045de9",
							padding: "1rem",
							color: "white",
							borderTopRightRadius: "10px",
							borderTopLeftRadius: "10px",

							textAlign: "center",
						}}
					>
						<span style={{ marginLeft: "10px" }}>{`${d} ${m}`}</span>
					</Typography>
					<Typography
						variant="h5"
						component="h2"
						style={{ marginTop: "1rem", marginLeft: "1rem" }}
					>
						{doctorName}
					</Typography>
					<Typography
						className={classes.pos}
						color="textSecondary"
						style={{ marginLeft: "1rem" }}
					>
						{doctorSpeciality}
					</Typography>
					<hr
						style={{
							width: "35%",
							marginLeft: "1rem",
							backgroundColor: "#045de9",
							height: "4px",
						}}
					></hr>

					<Typography
						variant="body2"
						component="p"
						style={{ marginLeft: "1rem", marginTop: "1.4rem" }}
					>
						{examination}
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						variant="outlined"
						size="small"
						color="primary"
						style={{
							marginLeft: "1.5rem",
							marginBottom: "2rem",
							width: "88%",
						}}
						onClick={handleOpen2}
					>
						View More
					</Button>
				</CardActions>
			</Card>
			<PrescriptionQR  handleClose={handleClose2}
				handleOpen={handleOpen2}
				open={open2} 
				prescriptionId={id}/>
		</div>
	);
};

export default PrescriptionCard;

PrescriptionCard.defaultProps = {
	date : Date.now(),
	doctorName : "Dr. Thomas Crane",
	doctorSpeciality : "Heart Speciality",
	examination : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
	link : "#"
}