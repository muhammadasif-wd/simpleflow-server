const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact.controller');

router.post("/contact", contactController.createContact);
module.exports = router;