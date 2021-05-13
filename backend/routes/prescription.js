const express = require("express");
const { createPrescription, getUserPrescriptions, getMyPrescriptions, getDoctorPrescriptions,getUserDetails,getPrescriptionById } = require("../controllers/prescription");
const router = express.Router();

const { protect } = require("../middleware/auth");

// router.use(protect);

// get all prescriptions issued by the doctor, ONLY ACCESSIBLE BY DOCTOR
router.get("/doctor",protect, getDoctorPrescriptions);

//get my prescriptions
router.get("/me", protect,getMyPrescriptions);

//get prescription by prescriptionID
router.get("/chemist/:id",getPrescriptionById);

//get prescriptions by user id
router.get("/:userId",protect, getUserPrescriptions);

//get user Details from uuid
router.get("/user/:uuid",protect, getUserDetails);

//create Rx
router.post("/",protect, createPrescription);

module.exports = router;
