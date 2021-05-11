const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const sendEmail = require("../utils/sendEmail");
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
	const user = await User.findOne({_id : req.body.user});
	const doctor = await User.findOne({_id : req.body.doctor});
	await Prescription.create(req.body);
	
	res.status(200).json({ success: true, data: {response : "Rx created"} });
	await sendEmail({
		email : user.email,
		subject: `Thanks for visiting Dr. ${doctor.name}`,
		message: `Dear ${user.name},\n\nDr. ${doctor.name} has uploaded a new prescription for you. You can access it from your dashboard.`,
	});
});

//@desc   get user detials
//@route  GET /api/prescription
//@access private
exports.getUserDetails = asyncHandler(async (req, res, next) => {
	const query = User.find({
		uuid: req.params.uuid,
	});
	query.then(async function(user){
		console.log(user.length)
		if(user.length==0) {
			user = null;
			let profile = null;
			res.status(200).json({
				success: true,
				data: {user : {user,profile}},
			});
		}else
		{let profile = await Profile.findOne({ user: user[0]._id });
		user = user[0];
		// profile = profile[0];
		console.log(typeof(user))
		res.status(200).json({
			success: true,
			data: {user : {user,profile}},
		});}
	});
	
});
