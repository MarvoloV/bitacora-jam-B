/* const { number } = require('joi'); */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const OperationSchema = new Schema(
  {
    dateOperation: {
      type: Date,
      required: true,
    },
    account: {
      type: String,
    },
    tradingResult: {
      type: String,
      default: 'ACTIVA',
    },
    currencyBase: {
      type: String,
      required: true,
    },
    currencyQuote: {
      type: String,
      required: true,
    },
    currencyPair: {
      type: String,
      required: true,
    },
    operationAmount: {
      type: Number,
      required: true,
    },
    typeOfEntry: {
      type: String,
    },
    stopLoss: {
      type: Number,
      required: true,
    },
    takeProfit: {
      type: Number,
    },
    confirmationsOperation: {
      type: Array,
    },
    linkEntry: {
      type: String,
    },
    linkOutput: {
      type: String,
    },
    risk: {
      type: Number,
      required: true,
    },
    lottery: {
      type: Number,
      required: true,
    },
    riskBenefit: {
      type: String,
    },
    resultPips: {
      type: Number,
      default: 0,
    },
    resultPercentage: {
      type: Number,
      default: 0,
    },
    resultMoney: {
      type: Number,
      default: 0,
    },
    accountId: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Operation', OperationSchema);
