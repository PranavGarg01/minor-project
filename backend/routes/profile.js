const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/auth");
const {
	getAllProfiles,
	getUserProfile,
	getMyProfile,
	createProfile,
	updateProfile,
	deleteProfile,
	getAllDocProfiles,
	getMyDocProfile,
	updateDocProfile,
	createDocProfile,
	getDocUserProfile,
} = require("../controllers/profile");

router.use(protect);

//DOCTOR 

//get all doc profiles
router.get("/doctor", getAllDocProfiles);

//get my DocProfile
router.get("/doctor/me", getMyDocProfile);

//get all docProfile by userid
router.get("/doctor/:userId", getDocUserProfile);

//create docProfile
router.post("/doctor", createDocProfile);

//edit docProfile
router.put("/doctor", updateDocProfile);

// USER 

//get all profiles
router.get("/", getAllProfiles);

//get my profile
router.get("/me", getMyProfile);

//get profile by user id
router.get("/:userId", getUserProfile);

//create profile
router.post("/", createProfile);

//edit profile
router.put("/", updateProfile);

//delete profile
router.delete("/", deleteProfile);

module.exports = router;
