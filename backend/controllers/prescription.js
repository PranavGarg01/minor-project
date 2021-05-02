const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Prescription = require("../models/Prescription");
const User = require("../models/User.js");
const Profile = require("../models/Profile.js");

// //@desc get all prescriptions issued by the doctor
// //@route  GET /api/prescription/doctor
// //@access private
exports.getDoctorPrescriptions = asyncHandler(async (req, res, next) => {
	const prescription = await Prescription.find({
		doctor: req.user.id,
	}).populate("doctor").populate("user");
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
	const prescription = await Prescription.find({
		user: req.params.userId,
	}).populate("doctor");
	res.status(200).json({
		success: true,
		count: prescription.length,
		data: prescription,
	});
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

//@desc   get user detials
//@route  GET /api/prescription
//@access private
exports.getUserDetails = asyncHandler(async (req, res, next) => {
	const query = User.find({
		uuid: req.params.uuid,
	});
	query.then(async function(user){
		let profile = await Profile.findOne({ user: user[0]._id });
		user = user[0];
		// profile = profile[0];
		console.log(typeof(user))
		res.status(200).json({
			success: true,
			data: {user : {user,profile}},
		});
	});
	
});
