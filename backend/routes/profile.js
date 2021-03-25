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
} = require("../controllers/profile");

router.use(protect);

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
