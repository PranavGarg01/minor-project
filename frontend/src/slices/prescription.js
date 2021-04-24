import { createSlice } from "@reduxjs/toolkit";
import { setAlert } from "./alert";
import { setLoading, clearLoading } from "./loading";
import * as REQUESTS from "../api/prescription";

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
		const userPrescriptions = await REQUESTS.getUserPrescriptions();
		dispatch(setPrescriptions(userPrescriptions));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
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

export const createPrescription = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.createPrescription();
		dispatch(setAlert("Rx Created", "success"));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};
