const Joi = require("joi");
const put = Joi.object({
  name: Joi.string().alphanum().min(3).max(20),

  phone: Joi.string().alphanum().min(9).max(20),

  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
module.exports = { put };
