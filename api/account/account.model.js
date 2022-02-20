const mongoose = require('mongoose');
const { Schema } = mongoose;

const AccountSchema = new Schema(
  {
    accountName: {
      type: String,
      required: true,
    },
    accountAmount: {
      type: Number,
      required: true,
    },
    accountType: {
      type: String,
      required: true,
    },
    confirmations: {
      type: Array,
    },
    operationId: [
      {
        type: String,
        ref: 'Operation',
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Account', AccountSchema);
