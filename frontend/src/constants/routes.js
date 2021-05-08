//public
export const HOME = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const ABOUT = "/about";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password/:token";

//private
export const DASHBOARD = "/dashboard";
export const MYPROFILE = `${DASHBOARD}/my-profile`;
export const CREATEPROFILE = `${DASHBOARD}/create-profile`;
export const UPDATEPROFILE = `${DASHBOARD}/update-profile`;
export const MAKEAPPOINTMENT = `${DASHBOARD}/make-appointment`;
export const ADDAPPOINTMENT = `${DASHBOARD}/make-appointment/add`;
export const UPDATEAPPOINTMENT = `${DASHBOARD}/make-appointment/update`;
export const HEALTHREPORTS = `${DASHBOARD}/health-reports`;
export const NEWS = `${DASHBOARD}/news`;
export const UPDATE_PASSWORD = `${DASHBOARD}/update-password`;
export const UPDATE_DETAILS = `${DASHBOARD}/update-details`;

//doctor
export const DOCTOR_DASHBOARD = "/doctor-dashboard";
export const NEW_PRESCRIPTION = `${DOCTOR_DASHBOARD}/new-prescription`;
export const DOCTOR_PROFILE = `${DOCTOR_DASHBOARD}/my-profile`;
export const DOCTOR_UPDATEPROFILE = `${DOCTOR_DASHBOARD}/update-profile`;
