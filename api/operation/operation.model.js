/* const { number } = require('joi'); */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const OperationSchema = new Schema(
  {
    dateOperation: {
      type: Date,
      required: true,
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
      type: Number,
      required: true,
    },
    lottery: {
      type: Number,
      required: true,
    },
    riskBeneffi: {
      type: String,
    },
    linkEntry: {
      type: String,
    },
    linkOff: {
      type: String,
    },
    profitPercentaje: {
      type: Number,
    },
    profitAmount: {
      type: Number,
    },
    confirmationsOperation: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Operation', OperationSchema);
