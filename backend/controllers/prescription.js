const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Prescription = require("../models/Prescription");

// //@desc get all prescriptions issued by the doctor
// //@route  GET /api/prescription/doctor
// //@access private
exports.getDoctorPrescriptions = asyncHandler(async (req, res, next) => {
	const prescription = await Prescription.find({doctor : req.user.id}).populate("doctor");
	res.status(200).json({
		success: true,
		count: prescription.length,
		data: prescription,
	});
});

//@desc get all prescriptions by user
//@route  GET /api/prescription/:userId
//@access private
exports.getUserPrescriptions = asyncHandler(async (req, res, next) => {
	const prescription = await Prescription.find({ user: req.params.userId }).populate("doctor");
	res.status(200).json({ success: true, data: prescription });
});

//@desc get all prescriptions by user
//@route  GET /api/prescription/me
//@access private
exports.getMyPrescriptions = asyncHandler(async (req, res, next) => {
	const prescription = await Prescription.find({
		user: req.user.id,
	}).populate("doctor");
	res.status(200).json({ success: true, data: prescription });
});

//@desc   create Rx
//@route  POST /api/prescription
//@access private
exports.createPrescription = asyncHandler(async (req, res, next) => {
	req.body.doctor = req.user.id;

	await Prescription.create(req.body);

	res.status(200).json({ success: true, data: "Rx created" });
});
