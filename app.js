const express = require('express');
const app = express();
const cors = require('cors');
const httpStatus = require('http-status');


// all route import
const contact = require('./src/routes/contact.route');
const events = require('./src/routes/events.route');

// middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.static('file'));

// call route
app.use('/api/v1', contact);

app.use('/api/v1', events);




// Handle not found route
app.use((req, res, next) => {
	res.status(httpStatus.NOT_FOUND).json({
		success: false,
		message: 'Not Found',
		errorMessages: [
			{
				path: req.originalUrl,
				message: 'API Not Found',
			},
		],
	});
	next();
});


// route hit
app.get('/', (req, res, next) => {
	res.send(
		`<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">Welcome to server</h1>`
	);
});

module.exports = app;
