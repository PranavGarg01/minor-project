import React, { useState,useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from "prop-types"; 
import { useHistory } from "react-router-dom";
import { loginUser } from "../slices/auth";
const Login = (props) => {
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
	}

	const {
		auth: { isAuthenticated },
	  } = useSelector((state) => {
		return {
		  auth: state.auth,
		};
	  }, shallowEqual);
	  const history = useHistory();
	  useEffect(() => {
		if (isAuthenticated) {
		  history.push('/dashboard');
		}
	  }, [isAuthenticated]);
	return (
		<div className='box'>
			<h1 align='center'>Login</h1>
			<form role='form' onSubmit={e=>onSubmit(e)}>
				<div className='inputBox'>
					<input
						type='text'
						name='email'
						value={email}
						onChange={onChange}
						autoComplete='off'
						required
					/>
					<label>Email</label>
				</div>
				<div className='inputBox'>
					<input
						type='password'
						name='password'
						value={password}
						onChange={onChange}
						autoComplete='off'
						required
					/>
					<label>Password</label>
				</div>

				<input type='submit' name='login' value='Login' />
			</form>
		</div>
	);
};

Login.propTypes = {};

export default Login;
