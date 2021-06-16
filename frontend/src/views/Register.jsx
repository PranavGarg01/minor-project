import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import PropTypes from "prop-types";
import { registerUser } from "../slices/auth";
import { useHistory } from "react-router-dom";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import {
	colors,
	Avatar,
	CssBaseline,
	ThemeProvider,
	Typography,
	Container,
	createMuiTheme,
	Box,
	Grid,
	makeStyles,
	Button,
	SvgIcon,
	FormControlLabel,
	Checkbox,
	AutoComplete,
	TextField,
	Link,
	Paper,
} from "@material-ui/core";

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#556cd6",
		},
		secondary: {
			main: "#19857b",
		},
		error: {
			main: colors.red.A400,
		},
		background: {
			default: "#fff",
		},
	},
});
const useStyles = makeStyles((theme) => ({
	paper: {
		margin: "25% auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100%",
		padding: "2rem",
		borderRadius: "10px",
		border: "1px solid lightgray",
	},
	avatar: {
		marginBottom: theme.spacing(2),
		backgroundColor: theme.palette.secondary.main,
		width: theme.spacing(10),
		height: theme.spacing(10),
		marginTop: theme.spacing(-9),
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(4),
	},
	submit: {
		margin: theme.spacing(2, 0, 2),
	},
	signInText: {
		paddingTop: theme.spacing(3),
		color: "gray",
	},
}));

const Register = () => {
	const classes = useStyles();

	const [value, setValue] = React.useState("user");

	const handleChange = (event) => {
		setValue(event.target.value);
	};
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuthenticated } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
	}));
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		role: "user",
	});
	const onChange = (e) => {
		console.log(e.target.value);
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const { name, email, password, role } = formData;
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(formData, history));
	};
	useEffect(() => {
		if (isAuthenticated) history.push("/dashboard");
	}, [isAuthenticated, history]);
	return (
		// <div className="box">
		// 	<h1 align="center">Register</h1>
		// 	<form role="form" onSubmit={(e) => onSubmit(e)}>
		// 		<div className="inputBox">
		// 			<input
		// 				type="text"
		// 				name="name"
		// 				value={name}
		// 				onChange={onChange}
		// 				autoComplete="off"
		// 				required
		// 			/>
		// 			<label>Name</label>
		// 		</div>
		// 		<div className="inputBox">
		// 			<input
		// 				type="email"
		// 				name="email"
		// 				value={email}
		// 				onChange={onChange}
		// 				autoComplete="off"
		// 				required
		// 			/>
		// 			<label>Email</label>
		// 		</div>
		// 		<div className="inputBox">
		// 			<input
		// 				type="password"
		// 				name="password"
		// 				value={password}
		// 				onChange={onChange}
		// 				autoComplete="off"
		// 				required
		// 			/>
		// 			<label>Password</label>
		// 		</div>
		// 		<div>
		// 			<input
		// 				type="radio"
		// 				value="user"
		// 				name="role"
		// 				defaultChecked={true}
		// 				onChange={onChange}
		// 			/>
		// 			User
		// 			<br />
		// 			<input
		// 				type="radio"
		// 				value="doctor"
		// 				name="role"
		// 				defaultChecked={false}
		// 				onChange={onChange}
		// 			/>
		// 			Doctor
		// 		</div>
		// 		<input type="submit" name="register" value="Register" />
		// 	</form>
		// </div>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<Paper elevation={3} className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h4">
					Register
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => onSubmit(e)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="name"
								label="Name"
								name="name"
								autoComplete="name"
								value={name}
								onChange={onChange}
								className={classes.textField}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								value={email}
								onChange={onChange}
								autoComplete="email"
								className={classes.textField}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								value={password}
								onChange={onChange}
								autoComplete="current-password"
							/>
						</Grid>
					</Grid>

					<FormControl component="fieldset">
						<Typography
							component="legend"
							variant="h6"
							className={classes.signInText}
						>
							Register as:
						</Typography>
						<RadioGroup
							aria-label="role"
							name="role"
							value={role}
							onChange={onChange}
						>
							<Grid container>
								<Grid item xs={6}>
									<FormControlLabel
										value="user"
										control={<Radio />}
										label="User"
									/>
								</Grid>
								<Grid item xs={6}>
									<FormControlLabel
										value="doctor"
										control={<Radio />}
										label="Doctor"
									/>
								</Grid>
							</Grid>
						</RadioGroup>
					</FormControl>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
					>
						Register
					</Button>
				</form>
			</Paper>
		</Container>
	);
};

Register.propTypes = {};

export default Register;
