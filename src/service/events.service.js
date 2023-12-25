const httpStatus = require('http-status')
const { mongoose } = require('mongoose')
const Events = require('../model/events.model')

exports.createEvents = async (payload) => {
    try {
        const result = await Events.create(payload)
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the events',
            error: error.message,
        };
    }
}

exports.getEvents = async () => {
    try {
        const result = await Events.find().lean()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the events',
            error: error.message,
        };
    }
}
exports.getSingleEvents = async (payload) => {
    try {
        const result = await Events.findById({ _id: payload }).lean().exec()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the events',
            error: error.message,
        };
    }
}
exports.updateEvents = async (id, updatedData) => {
    try {
        const existingEvents = await Events.findById({ _id: id }).lean().exec();
        if (!existingEvents) {
            // Handle the case where the contact with the given ID is not found
            return {
                statusCode: httpStatus.NOT_FOUND,
                success: false,
                message: 'Events not found',
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

        const result = await Events.findByIdAndUpdate({ _id: id }, updateFields, { new: true });
        return result
    } catch (error) {
        if (error instanceof mongoose.Error.CastError) {
            return {
                statusCode: httpStatus.BAD_REQUEST,
                success: false,
                message: 'Invalid Events ID format',
                error: error.message,
            };
        }
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while updating the events',
            error: error.message,
        };
    }
}

exports.deleteEvents = async (payload) => {
    try {
        const result = await Events.findByIdAndDelete({ _id: payload }).lean().exec()
        return result
    } catch (error) {
        return {
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
            success: false,
            message: 'An error occurred while deleted the events',
            error: error.message,
        };
    }
}