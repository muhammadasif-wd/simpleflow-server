const httpStatus = require('http-status');
const eventsService = require('../service/events.service');
const sendResponse = require('../shared/sendResponse');

exports.createEvents = async (req, res) => {
	try {
		const reqData = await eventsService.createEvents(req.body);
		return sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: 'Events data saved successfully.',
			data: reqData,
		});
	} catch (error) {
		return sendResponse(res, {
			statusCode: httpStatus.INTERNAL_SERVER_ERROR,
			success: false,
			message: 'An error occurred while creating events.',
			error: error.message,
		});
	}
};

exports.getEvents = async (req, res) => {
	try {
		const reqData = await eventsService.getEvents(req.body);
		return sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: 'Events retrieve successfully.',
			data: reqData,
		});
	} catch (error) {
		return sendResponse(res, {
			statusCode: 500,
			success: false,
			message: 'An error occurred while retrieve events.',
			error: error.message,
		});
	}
};
exports.getSingleEvents = async (req, res) => {
	const { id } = req.params;
	try {
		const reqData = await eventsService.getSingleEvents(id);
		return sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: 'Event retrieve successfully.',
			data: reqData,
		});
	} catch (error) {
		return sendResponse(res, {
			statusCode: 500,
			success: false,
			message: 'An error occurred while retrieve event.',
			error: error.message,
		});
	}
};
exports.updateEvents = async (req, res) => {
	const { id } = req.params;
	const { ...updatedData } = req.body;

	try {
		const reqData = await eventsService.updateEvents(id, updatedData);
		if (!reqData?.statusCode) {
			return sendResponse(res, {
				statusCode: httpStatus.OK,
				success: true,
				message: 'Event updated successfully.',
				data: reqData,
			});
		} else {
			return sendResponse(res, {
				statusCode:
					(reqData?.statusCode === 404 && httpStatus.NOT_FOUND) ||
					(reqData?.statusCode === 400 && httpStatus.BAD_REQUEST),
				success: false,
				message: "Event could't updated.",
				data: reqData,
			});
		}
	} catch (error) {
		return sendResponse(res, {
			statusCode: 500,
			success: false,
			message: 'An error occurred while updated event.',
			error: error.message,
		});
	}
};
exports.deleteEvents = async (req, res) => {
	const { id } = req.params;
	try {
		const reqData = await eventsService.deleteEvents(id);
		return sendResponse(res, {
			statusCode: httpStatus.OK,
			success: true,
			message: 'Event deleted successfully.',
			data: reqData,
		});
	} catch (error) {
		return sendResponse(res, {
			statusCode: 500,
			success: false,
			message: 'An error occurred while deleted event.',
			error: error.message,
		});
	}
};
