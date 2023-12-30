const Joi = require('joi');

const createEventsValidationSchema = Joi.object({
	title: Joi.string().min(10).max(80).required().messages({
		'string.base': 'Event should be a string',
		'string.empty': 'Event title is required',
		'string.min': 'Minimum 10 characters are required for the name',
		'string.max': 'Maximum 80 characters are allowed for the name',
		'any.required': 'Event Title is required',
	}),
	img: Joi.string().required().messages({
		'string.base': 'Event image should be a url',
		'string.empty': 'Event image is required',
		'any.required': 'Event image is required',
	}),
	date: Joi.string().required().messages({
		'string.base': 'Event date should be a string',
		'string.empty': 'Event date is required',
		'any.required': 'Event date is required',
	}),
	location: Joi.string().required().messages({
		'string.base': 'Location should be a string',
		'string.empty': 'Event Location is required',
		'any.required': 'Event Location is required',
	}),
	description: Joi.string().required().messages({
		'string.base': 'Event description should be a string',
		'string.empty': 'Event description is required',
		'any.required': 'Event description is required',
	}),
});

const updateEventsValidationSchema = Joi.object({
	title: Joi.string().min(10).max(80).required().optional().messages({
		'string.base': 'Event should be a string',
		'string.empty': 'Event title is required',
		'string.min': 'Minimum 10 characters are required for the name',
		'string.max': 'Maximum 80 characters are allowed for the name',
		'any.required': 'Event Title is required',
	}),
	img: Joi.string().required().optional().messages({
		'string.base': 'Event image should be a url',
		'string.empty': 'Event image is required',
		'any.required': 'Event image is required',
	}),
	date: Joi.string().required().optional().messages({
		'string.base': 'Event date should be a string',
		'string.empty': 'Event date is required',
		'any.required': 'Event date is required',
	}),
	location: Joi.string().required().optional().messages({
		'string.base': 'Location should be a string',
		'string.empty': 'Event Location is required',
		'any.required': 'Event Location is required',
	}),
	description: Joi.string().required().optional().messages({
		'string.base': 'Event description should be a string',
		'string.empty': 'Event description is required',
		'any.required': 'Event description is required',
	}),
});

module.exports = {
	createEventsValidationSchema,
	updateEventsValidationSchema,
};
