const Joi = require("joi");

const post = Joi.object({
  password: Joi.string().min(6).max(30).required(),

  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required(),
});

module.exports = { post };
