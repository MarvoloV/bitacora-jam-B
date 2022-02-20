const Joi = require('joi');
const joiObjectId = require('joi-objectid');
Joi.objectId = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required(),
});

const PayloadSchema = Joi.object().keys({
  accountName: Joi.string().required().min(3).max(50),
  accountAmount: Joi.number().required(),
  accountType: Joi.string().required(),
  confirmations: Joi.array() /* .optional().allow([]) */,
  operationId: Joi.string(),
});

const AccountSchema = Joi.object().keys({
  body: PayloadSchema,
  params: ParamsSchema,
});

module.exports = {
  AccountSchema,
};
