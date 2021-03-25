const mongoose = require("mongoose");
const config = require("config");
const mongoURI = config.get("mongoURI");

const connectDB = async () => {
	try {
		mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		});
		console.log(`Mongo DB Connected ..`.cyan.underline.bold);
	} catch (err) {
		console.log(err.message);
		//exit process with failure
		process.exit(1);
	}
};
module.exports = connectDB;
