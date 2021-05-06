import { createSlice } from "@reduxjs/toolkit";
import { setAlert } from "./alert";
import { setLoading, clearLoading } from "./loading";
import * as REQUESTS from "../api/profile";
import { MYPROFILE } from "../constants/routes";

const initialState = {
	myProfile: null,
	profileUser: null,
};

const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		setMyProfile(state, { payload }) {
			state.myProfile = payload.data;
		},
		setProfileForUser(state, { payload }) {
			state.profileUser = payload.data;
		},
	},
});
export const { setMyProfile, setProfileForUser } = profileSlice.actions;
export default profileSlice.reducer;

//thunks

export const getMyProfile = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const myProfile = await REQUESTS.getMyProfile();

		dispatch(setMyProfile(myProfile));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};
export const getProfileByUser = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const profile = await REQUESTS.getProfileUser(id);
		dispatch(setProfileForUser(profile));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const createProfile = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.createProfile(formData);
		dispatch(clearLoading());
		history.push(MYPROFILE);
		dispatch(setAlert("Profile Created", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const editProfile = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.editProfile(formData);
		dispatch(clearLoading());
		history.push(MYPROFILE);
		dispatch(setAlert("Profile Updated", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

//doctor thunks

export const getMyDocProfile = () => async (dispatch) => {
	try {
		dispatch(setLoading());
		const myProfile = await REQUESTS.getMyDocProfile();

		dispatch(setMyProfile(myProfile));
		dispatch(clearLoading());
		console.log(myProfile);
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const getDocProfileByUser = (id) => async (dispatch) => {
	try {
		dispatch(setLoading());
		const profile = await REQUESTS.getDocProfileUser(id);
		dispatch(setProfileForUser(profile));
		dispatch(clearLoading());
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const createDocProfile = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.createDocProfile(formData);
		dispatch(clearLoading());
		history.push(MYPROFILE);
		dispatch(setAlert("Profile Created", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};

export const editDocProfile = (formData, history) => async (dispatch) => {
	try {
		dispatch(setLoading());
		await REQUESTS.editDocProfile(formData);
		dispatch(clearLoading());
		history.push(MYPROFILE);
		dispatch(setAlert("Profile Updated", "success"));
	} catch (err) {
		dispatch(clearLoading());
		console.log(err.response.data.error);
	}
};
