const express = require("express");
const { createPrescription, getUserPrescriptions, getMyPrescriptions, getDoctorPrescriptions,getUserDetails } = require("../controllers/prescription");
const router = express.Router();

const { protect } = require("../middleware/auth");

router.use(protect);

// get all prescriptions issued by the doctor, ONLY ACCESSIBLE BY DOCTOR
router.get("/doctor", getDoctorPrescriptions);

//get my prescriptions
router.get("/me", getMyPrescriptions);

//get prescriptions by user id
router.get("/:userId", getUserPrescriptions);

//get user Details from uuid
router.get("/user/:uuid", getUserDetails);

//create Rx
router.post("/", createPrescription);

module.exports = router;
