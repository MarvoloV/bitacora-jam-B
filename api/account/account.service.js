const Account = require('./account.model');
/**
 * Get all Accounts
 * @returns all Accounts
 */

async function getAllAccounts() {
  try {
    const accounts = await Account.find().populate('operationId');
    return accounts;
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}
/**
 * Create a new Account
 * @param {Object} account Account to create
 * @returns Account created
 */
async function createAccount(account) {
  try {
    const newAccount = new Account(account);
    const savedAccount = await newAccount.save();
    return savedAccount;
  } catch (error) {
    throw error;
  }
}
/**
 * Get Account by id
 * @param {string} id Indentifier of the note to be filtered
 * @returns Account
 */
async function getAccountById(id) {
  try {
    const account = await Account.findById(id).populate('operationId');
    return account;
  } catch (error) {
    throw error;
  }
}
/**
 * Update a Account
 * @param {string} id  Indentifier of the note to be updated
 * @returns Account updated
 */
async function updateAccount(id, account) {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(id, account);
    return updatedAccount;
  } catch (error) {
    throw error;
  }
}
/**
 * Delete a Account
 * @param {string} id  Indentifier of the note to be updated
 * @returns Account deleted
 */
async function deleteAccount(id) {
  try {
    const deletedAccount = await Account.findByIdAndDelete(id);
    return deletedAccount;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  updateAccount,
  deleteAccount,
};
