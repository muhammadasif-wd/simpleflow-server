const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const contactController = require('../controller/contact.controller');
const contactValidationSchema = require('../validation/contact.validation');
const sendResponse = require('../shared/sendResponse');

router.post("/contact", async (req, res) => {
    try {
        await contactValidationSchema.validateAsync(req.body, { abortEarly: false });
        await contactController.createContact(req, res);
    } catch (error) {
        return sendResponse(res, {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: error.details.map(detail => ({
                field: detail.context.key,
                message: detail.message,
            })),
            error: error
        });
    }
});

module.exports = router;
