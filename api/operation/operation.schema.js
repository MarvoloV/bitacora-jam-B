const Joi = require('joi');
const joiObjectId = require('joi-objectid');
Joi.objectId = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required(),
});

const PayloadSchema = Joi.object().keys({
  dateOperation: Joi.date().required(),
  account: Joi.string(),
  currencyBase: Joi.string().required(),
  currencyQuote: Joi.string().required(),
  currencyPair: Joi.string().required(),
  operationAmount: Joi.number().required(),
  stopLoss: Joi.number().required(),
  takeProfit: Joi.number(),
  risk: Joi.string().required(),
  lottery: Joi.string().required(),
  riskBeneffi: Joi.string(),
  linkEntry: Joi.string(),
  typeOfEntry: Joi.string(),
  linkOff: Joi.string(),
  resultPercentaje: Joi.number(),
  resultAmount: Joi.number(),
  resulTrade: Joi.string(),
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
