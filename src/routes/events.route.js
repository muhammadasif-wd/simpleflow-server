const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');
const eventsController = require('../controller/events.controller');
const eventsValidationSchema = require('../validation/events.validation');
const sendResponse = require('../shared/sendResponse');

router.post("/events", async (req, res) => {
    try {
        await eventsValidationSchema.createEventsValidationSchema.validateAsync(req.body, { abortEarly: false });
        await eventsController.createEvents(req, res);
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


router.get("/events/:id", eventsController.getSingleEvents)
router.patch("/events/:id", async (req, res, next) => {
    try {
        await eventsValidationSchema.updateEventsValidationSchema.validateAsync(req.body, { abortEarly: false });
        await eventsController.updateEvents(req, res);
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
})
router.delete("/events/:id", eventsController.deleteEvents)
router.get("/events", eventsController.getEvents)

module.exports = router;
