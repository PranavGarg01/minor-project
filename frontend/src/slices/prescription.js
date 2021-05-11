import { createSlice } from "@reduxjs/toolkit";
import { setAlert } from "./alert";
import { setLoading, clearLoading } from "./loading";
import * as REQUESTS from "../api/prescription";
import { DOCTOR_DASHBOARD } from "../constants/routes";

const initialState = {
	prescription: null,
	prescriptions: [],
};

const prescriptionSlice = createSlice({
	name: "prescription",
	initialState,
	reducers: {
		setMyPrescription(state, { payload }) {
			state.prescription = payload.data;
		},
		setPrescriptions(state, { payload }) {
			state.prescriptions = payload.data;
		},
	},
});

export const {
	setMyPrescription,
	setPrescriptions,
} = prescriptionSlice.actions;
export default prescriptionSlice.reducer;

//thunks

export const getMyPrescriptions = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const myPrescriptions = await REQUESTS.getMyPrescriptions();
		dispatch(setPrescriptions(myPrescriptions));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getUserPrescriptions = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const userPrescriptions = await REQUESTS.getUserPrescriptions(id);
		dispatch(setPrescriptions(userPrescriptions));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("Your Prescriptions could not be loaded","error"));
		console.log(err.response.data.error);
	}
};

export const getDoctorPrescriptions = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const doctorPrescriptions = await REQUESTS.getDoctorPrescriptions();
		dispatch(setPrescriptions(doctorPrescriptions));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const createPrescription = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const res = await REQUESTS.createPrescription(formData);
		dispatch(clearLoading());
		dispatch(setAlert("Rx Created", "success"));
		history.push(DOCTOR_DASHBOARD);
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getUserDetails = (uuid) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const userDetails = await REQUESTS.getUserDetails(uuid);
		// console.log(userDetails.user);
		if(userDetails.data.user.user == null){
			dispatch(setAlert("User Not Found", "error"));
			dispatch(clearLoading());
		}
		else if (userDetails.data.user.profile ==null) {
			dispatch(setAlert("Profile Not Found", "error"));
			dispatch(clearLoading());
		} else {
		console.log("abc")
		dispatch(setAlert("Found User", "success"));
		dispatch(setMyPrescription(userDetails));
		}
		
	} catch (err) {
		dispatch(clearLoading());
		dispatch(setAlert("Please fill correct ID", "error"));
		console.log(err.response.data.error);
	}
};
