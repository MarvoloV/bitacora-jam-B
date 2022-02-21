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
    stopLoss: {
      type: Number,
      required: true,
    },
    takeProfit: {
      type: Number,
    },
    risk: {
      type: String,
      required: true,
    },
    lottery: {
      type: String,
      required: true,
    },
    riskBeneffi: {
      type: String,
    },
    linkEntry: {
      type: String,
    },
    typeOfEntry: {
      type: String,
    },
    linkOff: {
      type: String,
    },
    resultPercentaje: {
      type: String,
    },
    resultAmount: {
      type: Number,
    },
    confirmationsOperation: {
      type: Array,
    },
    resulTrade: {
      type: String,
      default: 'Pendiente',
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Operation', OperationSchema);
