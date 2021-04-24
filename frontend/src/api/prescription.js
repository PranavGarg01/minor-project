import API from "./api";

export const getUserPrescriptions = async (id) => {
	try {
		const res = await API.get(`/prescription/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getMyPrescriptions = async () => {
	try {
		const res = await API.get("/prescription/me");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const getDoctorPrescriptions = async () => {
	try {
		const res = await API.get("/prescriptions/doctor");
		return res.data;
	} catch (err) {
		throw err;
	}
};

export const createPrescription = async (formData) => {
	try {
		const res = await API.post("/prescription/", formData);
		return res.data;
	} catch (err) {
		throw err;
	}
};
