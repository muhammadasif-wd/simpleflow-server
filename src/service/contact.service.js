const httpStatus = require('http-status')
const Contact = require("../model/contact.model")
const { default: mongoose } = require('mongoose')

exports.createContact = async (payload) => {
    try {
        const result = await Contact.create(payload)
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the contact',
            error: error.message,
        };
    }
}

exports.getContact = async () => {
    try {
        const result = await Contact.find().lean()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the contact',
            error: error.message,
        };
    }
}
exports.getSingleContact = async (payload) => {
    try {
        const result = await Contact.findById({ _id: payload }).lean().exec()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the contact',
            error: error.message,
        };
    }
}
exports.updateContact = async (id, updatedData) => {
    try {
        const existingContact = await Contact.findById({ _id: id }).lean().exec();
        if (!existingContact) {
            // Handle the case where the contact with the given ID is not found
            return {
                statusCode: httpStatus.NOT_FOUND,
                success: false,
                message: 'Contact not found',
            };
        }
        // Create an object to store fields to be updated
        const updateFields = {};
        // Iterate over the keys in updateData and include only those that are present
        for (const key in updatedData) {
            if (Object.prototype.hasOwnProperty.call(updatedData, key)) {
                updateFields[key] = updatedData[key];
            }
        }
        // Add the updatedAt field
        updateFields.updatedAt = new Date();

        const result = await Contact.findByIdAndUpdate({ _id: id }, updateFields, { new: true });
        return result
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return {
                statusCode: httpStatus.BAD_REQUEST,
                success: false,
                message: 'Invalid contact ID format',
                error: error.message,
            };
        }
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the contact',
            error: error.message,
        };
    }
}

exports.deleteContact = async (payload) => {
    try {
        const result = await Contact.findByIdAndDelete({ _id: payload }).lean().exec()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the contact',
            error: error.message,
        };
    }
}