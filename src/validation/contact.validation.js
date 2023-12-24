const Joi = require('joi');

const contactValidationSchema = Joi.object({
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
        .email({ tlds: { allow: false } }) // You can adjust this based on your email validation needs
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

module.exports = contactValidationSchema;
