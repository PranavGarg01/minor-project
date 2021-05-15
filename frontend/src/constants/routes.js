//public
export const HOME = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";
export const ABOUT = "/about";
export const FORGOT_PASSWORD = "/forgot-password";
export const RESET_PASSWORD = "/reset-password/:token";
export const CHEMIST = "/chemist";

//private

//User
export const DASHBOARD = "/dashboard";
export const MYPROFILE = `${DASHBOARD}/my-profile`;
export const CREATEPROFILE = `${DASHBOARD}/create-profile`;
export const UPDATEPROFILE = `${DASHBOARD}/update-profile`;
export const GENERATE_QR = `${DASHBOARD}/generate-qr`;
export const PRESCRIPTION = '/prescription/:id';

//doctor
export const DOCTOR_DASHBOARD = "/doctor-dashboard";
export const NEW_PRESCRIPTION = `${DOCTOR_DASHBOARD}/new-prescription`;
export const DOCTOR_PROFILE = `${DOCTOR_DASHBOARD}/my-profile`;
export const DOCTOR_UPDATEPROFILE = `${DOCTOR_DASHBOARD}/update-profile`;
