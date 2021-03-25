const asyncHandler = require("../middleware/async");
const crypto = require("crypto");
const ErrorResponse = require("../utils/errorResponse");
const Patient = require("../models/Patient");

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body;

	// Create Patient
	const patient = await Patient.create({
		name,
		email,
		password,
	});
	await sendTokenResponse(patient, 200, res);
});

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
	const { email, password } = req.body;

	// Validate emil & password
	if (!email || !password) {
		return next(
			new ErrorResponse("Please provide an email and password", 400)
		);
	}

	// Check for user
	const patient = await Patient.findOne({ email }).select("+password");

	if (!patient) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	// Check if password matches
	const isMatch = await patient.matchPassword(password);

	if (!isMatch) {
		return next(new ErrorResponse("Invalid credentials", 401));
	}

	sendTokenResponse(patient, 200, res);
});

// @desc      Update user details
// @route     PUT /api/v1/auth/updatedetails
// @access    Private
exports.updateDetails = asyncHandler(async (req, res, next) => {
	const fieldsToUpdate = {
		name: req.body.name,
		email: req.body.email,
		// age: req.body.age,
	};

	const user = await Patient.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
		new: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		data: user,
	});
});

// @desc      Get current logged in user
// @route     GET /api/v1/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
	// user is already available in req due to the protect middleware
	const user = req.user;

	res.status(200).json({
		success: true,
		data: user,
	});
});

// Get token from model and send response
const sendTokenResponse = (user, statusCode, res) => {
	// Create token
	const token = user.getSignedJwtToken();

	res.status(statusCode).json({
		success: true,
		token,
	});
};
