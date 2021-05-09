import {
	DASHBOARD,
	DOCTOR_DASHBOARD,
	DOCTOR_PROFILE,
	GENERATE_QR,
	LOGIN,
	MYPROFILE,
	NEW_PRESCRIPTION,
	REGISTER,
} from "../../../constants/routes";

export const MenuItems = [
	{
		title: "Home",
		url: "/",
		cName: "nav-links",
	},
	{
		title: "Services",
		url: "#",
		cName: "nav-links",
	},
	{
		title: "Sign Up",
		url: REGISTER,
		cName: "nav-links",
	},
	{
		title: "Login",
		url: LOGIN,
		cName: "nav-links",
	},
	{
		title: "Sign up",
		url: "/register",
		cName: "nav-links",
	},
];

//private links

export const UserLinks = [
	{
		title: "Dashboard",
		url: DASHBOARD,
		cName: "nav-links",
	},
	{
		title: "My Profile",
		url: MYPROFILE,
		cName: "nav-links",
	},
	{
		title: "Generate QR",
		url: GENERATE_QR,
		cName: "nav-links",
	},
];

export const DoctorLinks = [
	{
		title: "Dashboard",
		url: DOCTOR_DASHBOARD,
		cName: "nav-links",
	},
	{
		title: "My Profile",
		url: DOCTOR_PROFILE,
		cName: "nav-links",
	},
	{
		title: "New Prescription",
		url: NEW_PRESCRIPTION,
		cName: "nav-links",
	},
	
];
