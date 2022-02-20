const Joi = require('joi');
const joiObjectId = require('joi-objectid');
Joi.objectId = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required(),
});

const PayloadSchema = Joi.object().keys({
  dateOperation: Joi.date().required(),
  currencyBase: Joi.string().required(),
  currencyQuote: Joi.string().required(),
  currencyPair: Joi.string().required(),
  operationAmount: Joi.number().required(),
  stopLoss: Joi.number().required(),
  takeProfit: Joi.number(),
  risk: Joi.number().required(),
  lottery: Joi.number().required(),
  riskBeneffi: Joi.string(),
  linkEntry: Joi.string(),
  linkOff: Joi.string(),
  profitPercentaje: Joi.number(),
  profitAmount: Joi.number(),
  confirmationsOperation: Joi.array(),
  // confirmations: Joi.array() /* .optional().allow([]) */,
});

const OperationSchema = Joi.object().keys({
  body: PayloadSchema,
  params: ParamsSchema,
});

module.exports = {
  OperationSchema,
};
