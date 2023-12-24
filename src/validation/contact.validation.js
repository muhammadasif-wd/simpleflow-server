const Joi = require('joi');

const createContactValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(32)
        .required()
        .messages({
            'string.base': 'Name should be a string',
            'string.empty': 'Name is required',
            'string.min': 'Minimum 3 characters are required for the name',
            'string.max': 'Maximum 32 characters are allowed for the name',
            'any.required': 'Name is required',
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.base': 'Email should be a string',
            'string.empty': 'Email is required',
            'string.email': 'Please provide a valid email',
            'any.required': 'Email is required',
        }),
    message: Joi.string()
        .required()
        .messages({
            'string.base': 'Message should be a string',
            'string.empty': 'Message is required',
            'any.required': 'Message is required',
        }),
});

const updateContactValidationSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .max(32)
        .optional() // Making the name optional for update
        .messages({
            'string.base': 'Name should be a string',
            'string.min': 'Minimum 3 characters are required for the name',
            'string.max': 'Maximum 32 characters are allowed for the name',
        }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional() // Making the email optional for update
        .messages({
            'string.base': 'Email should be a string',
            'string.email': 'Please provide a valid email',
        }),
    message: Joi.string()
        .optional() // Making the message optional for update
        .messages({
            'string.base': 'Message should be a string',
        }),
});

module.exports = {
    createContactValidationSchema,
    updateContactValidationSchema,
};
