const Joi = require('joi');
const joiObjectId = require('joi-objectid');
Joi.objectId = joiObjectId(Joi);

const ParamsSchema = Joi.object({
  id: Joi.objectId().required(),
});

const PayloadSchema = Joi.object().keys({
  dateOperation: Joi.date().required(),
  account: Joi.string(),
  tradingResult: Joi.string().default('ACTIVA'),
  currencyBase: Joi.string().required(),
  currencyQuote: Joi.string().required(),
  currencyPair: Joi.string().required(),
  operationAmount: Joi.number().required(),
  typeOfEntry: Joi.string(),
  stopLoss: Joi.number().required(),
  takeProfit: Joi.number(),
  confirmationsOperation: Joi.array(),
  linkEntry: Joi.string(),
  linkOutput: Joi.string(),
  risk: Joi.number().required(),
  lottery: Joi.number().required(),
  riskBenefit: Joi.string(),
  resultPips: Joi.number(),
  resultPercentaje: Joi.number(),
  resultMoney: Joi.number(),
  accountID: Joi.string(),
});

const OperationSchema = Joi.object().keys({
  body: PayloadSchema,
  params: ParamsSchema,
});

module.exports = {
  OperationSchema,
};
