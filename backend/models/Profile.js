const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  gender: {
    type: String,
    required: [true, "Please specify your gender"],
    enum: ["male", "female", "others"],
    default: "male",
  },
  bloodGroup: {
    type: String,
    required: [true, "Please specify your blood group"],
  },
  //m
  height: {
    type: Number,
  },
  //kgs
  weight: {
    type: Number,
  },
  // medicalHistory: {
  //   type: [String],
  //   required: [true, "Please add your medical history"],
  // },
  // deficiency: {
  //   type: [String],
  //   required: [true, "Please add any kind of allergies you have"],
  // },

  phoneNumber: {
    type: String,
    required: [true, "Please add your contact number"],
  },
});

module.exports = mongoose.model("profile", ProfileSchema);
