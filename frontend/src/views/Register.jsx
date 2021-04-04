import React, { useState,useEffect } from "react";
import "./Login.css";
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PropTypes from "prop-types"; 
import {registerUser} from '../slices/auth'
import { useHistory } from "react-router-dom";
const Register = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const { isAuthenticated } = useSelector((state) => ({
		isAuthenticated: state.auth.isAuthenticated,
	}));
	const [formData, setFormData] = useState({
		name : "",
		email: "",
		password: "",
	});
	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });
	const { name,email, password } = formData;
	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser(formData, history));
	}
	useEffect(()=> {
		if(isAuthenticated)
			history.push('/dashboard')
	},[isAuthenticated,history])
	return (
		<div className='box'>
			<h1 align='center'>Register</h1>
			<form role='form' onSubmit={e=>onSubmit(e)}>
			<div className='inputBox'>
					<input
						type='text'
						name='name'
						value={name}
						onChange={onChange}
						autoComplete='off'
						required
					/>
					<label>Name</label>
				</div>
				<div className='inputBox'>
					<input
						type='email'
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

				<input type='submit' name='register' value='Register' />
			</form>
		</div>
	);
};

Register.propTypes = {};

export default Register;
