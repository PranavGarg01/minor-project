const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Profile = require("../models/Profile");

//@desc get all profiles
//@route  GET /api/v1/profile
//@access private
exports.getAllProfiles = asyncHandler(async (req, res, next) => {
	const profiles = await Profile.find();
	res.status(200).json({
		success: true,
		count: profiles.length,
		data: profiles,
	});
});

//@desc get  profile by user
//@route  GET /api/v1/profile/:userId
//@access private
exports.getUserProfile = asyncHandler(async (req, res, next) => {
	const profile = await Profile.findOne({ user: req.params.userId });
	res.status(200).json({ success: true, data: profile });
});

//@desc  get my profile
//@route  GET /api/v1/profile/me
//@access private
exports.getMyProfile = asyncHandler(async (req, res, next) => {
	const profile = await Profile.findOne({ user: req.user.id });
	res.status(200).json({ success: true, data: profile });
});

//@desc   create profile
//@route  POST /api/v1/profile
//@access private
exports.createProfile = asyncHandler(async (req, res, next) => {
	req.body.user = req.user.id;

	let profile = await Profile.findOne({ user: req.user.id });

	if (profile)
		return next(new ErrorResponse("Your profile is already created", 400));

	await Profile.create(req.body);

	res.status(200).json({ success: true, data: "Profile created" });
});

//@desc   update profile
//@route  PUT /api/v1/profile
//@access private
exports.updateProfile = asyncHandler(async (req, res, next) => {
	let profile = await Profile.findOne({ user: req.user.id });

	if (!profile)
		return next(new ErrorResponse("Your profile is not yet created", 400));

	await profile.update(req.body);
	res.status(200).json({
		success: true,
		data: "Profile updated",
	});
});

//@desc   delete profile
//@route  DELETE /api/v1/profile
//@access private
exports.deleteProfile = asyncHandler(async (req, res, next) => {
	const profile = await Profile.findOne({ user: req.user.id });
	if (!profile)
		return next(new ErrorResponse("Your profile is not yet created", 400));

	await profile.remove();
	res.status(200).json({
		success: true,
		data: "Profile deleted",
	});
});
