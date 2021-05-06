const mongoose = require("mongoose");

const DocProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	gender: {
		type: String,
		required: [true, "Please specify your gender"],
		enum: ["male", "female", "others"],
		default: "male",
	},
	licenseNo : {
		type : String,
		required : [true, "Please provide your license no."],
	},
	specialization : {
		type : String,
		required : [true, "Please enter a specialization"]
	},
	phoneNumber: {
		type: String,
		required: [true, "Please add your contact number"],
	},
});

module.exports = mongoose.model("docprofile", DocProfileSchema);
