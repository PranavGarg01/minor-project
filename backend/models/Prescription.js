const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	doctor: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "user",
	},
	date: {
		type: Date,
		default: Date.now,
	},
	examination: {
		type: String,
	},
	medicines: {
		type: String,
	},
	followUp: {
		type: Date,
	},
});

module.exports = mongoose.model("prescription", PrescriptionSchema);
