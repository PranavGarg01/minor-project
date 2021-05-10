import React, { useState, useEffect } from "react";

import { useSelector, useDispatch, shallowEqual } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { loginUser } from "../slices/auth";
import {
	colors,
	Avatar,
	CssBaseline,
	Typography,
	Container,
	createMuiTheme,
	Grid,
	makeStyles,
	Button,
	AutoComplete,
	TextField,
	Link,
	Paper,
} from "@material-ui/core";
import { REGISTER } from "../constants/routes";
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
		margin: "28% auto",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		height: "100%",
		padding: "2rem",
		borderRadius: "10px",
	},
	avatar: {
		marginBottom: theme.spacing(3),
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
		margin: theme.spacing(5, 0, 2),
	},
}));

const Login = (props) => {
	const classes = useStyles();

	const dispatch = useDispatch();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const { email, password } = formData;
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(loginUser(formData));
	};

	const {
		auth: { isAuthenticated },
	} = useSelector((state) => {
		return {
			auth: state.auth,
		};
	}, shallowEqual);
	const history = useHistory();
	console.log("login page " + isAuthenticated);
	useEffect(() => {
		if (isAuthenticated) {
			history.push("/dashboard");
		}
	}, [isAuthenticated]);
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Paper elevation={3} className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component='h1' variant='h4'>
					Login
				</Typography>
				<form
					className={classes.form}
					noValidate
					onSubmit={(e) => onSubmit(e)}
				>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={email}
								onChange={onChange}
								className={classes.textField}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								value={password}
								onChange={onChange}
								autoComplete='current-password'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Login
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link href={REGISTER} variant='body2'>
								Don't have an account ? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</Paper>
		</Container>
	);
};

Login.propTypes = {};

export default Login;
