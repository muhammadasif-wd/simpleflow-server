const express = require('express');
const app = express();
const cors = require('cors');
// all route import
const contact = require('./src/routes/contact.route');

// middleware
app.use(express.json());
app.use(cors({ origin: '*' }));
app.use(express.static('file'));

// call route
app.use('/api/v1', contact);

// route hit
app.get('/', (req, res, next) => {
	res.send(
		`<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">Welcome to server</h1>`
	);
});

module.exports = app;
