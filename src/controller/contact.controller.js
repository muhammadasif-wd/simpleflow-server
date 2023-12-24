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
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: "An error occurred while creating contact message.",
            error: error.message,
        });
    }
};

exports.getContact = async (req, res) => {
    try {
        const reqData = await contactService.getContact(req.body);
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Contact message retrieve successfully.",
            data: reqData,
        });
    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "An error occurred while retrieve contact message.",
            error: error.message,
        });
    }
};
exports.getSingleContact = async (req, res) => {
    const { id } = req.params;
    try {
        const reqData = await contactService.getSingleContact(id);
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Contact message retrieve successfully.",
            data: reqData,
        });
    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "An error occurred while retrieve contact message.",
            error: error.message,
        });
    }
};
exports.updateContact = async (req, res) => {
    const { id } = req.params;
    const { ...updatedData } = req.body

    try {
        const reqData = await contactService.updateContact(id, updatedData);
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Contact message updated successfully.",
            data: reqData,
        });
    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "An error occurred while updated contact message.",
            error: error.message,
        });
    }
};
exports.deleteContact = async (req, res) => {
    const { id } = req.params;
    try {
        const reqData = await contactService.deleteContact(id);
        return sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "Contact message deleted successfully.",
            data: reqData,
        });
    } catch (error) {
        return sendResponse(res, {
            statusCode: 500,
            success: false,
            message: "An error occurred while deleted contact message.",
            error: error.message,
        });
    }
};