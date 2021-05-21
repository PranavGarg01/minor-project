import API from "./api";

export const getUserPrescriptions = async (id) => {
	try {
		const res = await API.get(`/prescription/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
};
export const getPrescriptionById = async (id) => {
	try {
		const res = await API.get(`/prescription/chemist/${id}`);
		return res.data;
	} catch (err) {
		throw err;
	}
}
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
		const res = await API.get("/prescription/doctor");
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

export const getUserDetails = async (uuid) => {
	try {
		const res = await API.get(`/prescription/user/${uuid}`);
		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log("err")
		throw err;
	}
};
