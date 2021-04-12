const express = require("express");
const app = express();
const connectDB = require("./config/db");
const morgan = require("morgan");
const helmet = require("helmet");
//for security
const mongoSantize = require("express-mongo-sanitize");
const hpp = require("hpp");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
// const hpp = require("hpp");
const cors = require("cors");

//colors for console
require("colors");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Dev Logging Middleware
if (1==1) {
	app.use(morgan("dev"));
  }
//set security headers
app.use(helmet({ contentSecurityPolicy: false }));

//prevent xss attacks
app.use(xss());

// Rate limiting
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 mins
	max: 100,
});
app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Enable CORS
app.use(cors());

//routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/profile", require("./routes/profile"));
app.use('/api/prescription',require('./routes/prescription'))
// app.use('/api/property',require('./routes/property'))

app.get("/api/", (req, res) => {
	res.send("hello world");
});

//errorHandler
app.use(require("./middleware/error"));
//Server listening on PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
	console.log(`Server Started on Port ${PORT}`.yellow.bold)
);

// Handle unhandled promise rejections
process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);
	// Close server & exit process
	//server.close(() => process.exit(1));
});
