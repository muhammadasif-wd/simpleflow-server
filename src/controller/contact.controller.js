const httpStatus = require('http-status')
const contactService = require("../service/contact.service");
const sendResponse = require("../shared/sendResponse");
exports.createContact = async (req, res) => {
    try {
        const reqData = await contactService.createContact(req.body);
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Contact message send successfully.",
            data: reqData,
        });
    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "An error occurred while creating contact message.",
            error: error.message,
        });
    }
};
