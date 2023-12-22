/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./app');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// database connection
mongoose.connect(process.env.DATABASE).then(() => {
	try {
		console.log(`Database connection is successful.`);
	} catch (error) {
		console.log(`Database connection filed.`);
		console.log('database-error :>> ', error);
	}
});

// server
const port = process.env.PORT || 8000;
app.listen(port, () => {
	console.log(`App is running on port http://localhost:${port}`);
});
