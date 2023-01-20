const Joi = require("joi");

const patch = Joi.object({ favorite: Joi.boolean() });

module.exports = { patch };
