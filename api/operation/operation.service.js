const Operation = require('./operation.model');
const Account = require('../account/account.model');
/**
 * Get all Operations
 * @returns all Operations
 */

async function getAllOperations() {
  try {
    const operations = await Operation.find();
    return operations;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
/**
 * Create a new Operation
 * @param {Object} operation operation to create
 * @returns operation created
 */
async function createOperation(operation) {
  try {
    const newOperation = new Operation(operation);
    const savedOperation = await newOperation.save();
    return savedOperation;
  } catch (error) {
    throw error;
  }
}
/**
 * Get operation by id
 * @param {string} id Indentifier of the note to be filtered
 * @returns operation
 */
async function getOperationById(id) {
  try {
    const operation = await Operation.findById(id);
    return operation;
  } catch (error) {
    throw error;
  }
}
/**
 * Update a Operation
 * @param {string} id  Indentifier of the note to be updated
 * @returns Operation updated
 */
async function updateOperation(id, operation) {
  try {
    const updatedOperation = await Operation.findByIdAndUpdate(id, operation);
    return updatedOperation;
  } catch (error) {
    throw error;
  }
}
/**
 * Delete a Operation
 * @param {string} id  Indentifier of the note to be updated
 * @returns Operation deleted
 */
async function deleteOperation(id) {
  try {
    const deletedOperation = await Operation.findByIdAndDelete(id);
    return deletedOperation;
  } catch (error) {
    throw error;
  }
}
async function getOperationbyDate(idAccount, startDate, endDate) {
  try {
    const account = await Account.findById(idAccount);
    const operations = await Operation.find({
      dateOperation: {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      },
      accountId: account._id.toString(),
    });
    return operations;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllOperations,
  getOperationById,
  createOperation,
  updateOperation,
  deleteOperation,
  getOperationbyDate,
};
