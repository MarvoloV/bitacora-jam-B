const Joi = require('joi');
const joiObjectId = require('joi-objectid');
Joi.objectId = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required(),
});

const PayloadSchema = Joi.object().keys({
  location: Joi.string(),
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net', 'es', 'co'] },
    }),
  username: Joi.string().required().min(3).max(30),
  password: Joi.string().required().min(8),
  registered: Joi.string(),
  cell: Joi.string(),
  picture: Joi.string(),
  role: Joi.string().default('user'),
  accountId: Joi.string(),
  active: Joi.string(),
});

const UserSchema = Joi.object().keys({
  body: PayloadSchema,
  params: ParamsSchema,
});

module.exports = {
  UserSchema,
};
