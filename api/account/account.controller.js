const {
  getAllAccounts,
  createAccount,
  deleteAccount,
  getAccountById,
  updateAccount,
} = require('./account.service');

async function getAllAccountsHandler(req, res) {
  try {
    const accounts = await getAllAccounts();

    if (accounts.length == 0) {
      return res.status(404).json({ message: `no Accounts found` });
    }

    return res.status(200).json(accounts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function createAccountHandler(req, res) {
  try {
    const account = await createAccount(req.body);
    return res.status(201).json(account);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getAccountByIdHandler(req, res) {
  const { id } = req.params;
  try {
    const account = await getAccountById(id);
    if (!account) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateAccountHandler(req, res) {
  const { id } = req.params;
  try {
    const account = await updateAccount(id, req.body, {
      new: true,
    });

    if (!account) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(204).json(account);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteAccountHandler(req, res) {
  const { id } = req.params;
  try {
    const account = await deleteAccount(id);

    if (!account) {
      return res
        .status(404)
        .json({ message: `product not found with id: ${id}` });
    }

    return res.status(200).json(account);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllAccountsHandler,
  createAccountHandler,
  getAccountByIdHandler,
  updateAccountHandler,
  deleteAccountHandler,
};
