const { Router } = require('express');
const { AccountSchema } = require('./account.schema');
const { validate } = require('../../middleware/validateRequest');

const {
  createAccountHandler,
  deleteAccountHandler,
  getAllAccountsHandler,
  getAccountByIdHandler,
  updateAccountHandler,
} = require('./account.controller');

const { isAuthenticated, hasRole } = require('../../auth/auth.services');

const router = Router();

router.get('/', getAllAccountsHandler);
router.post('/', isAuthenticated(), createAccountHandler);
/* router.post(
  '/',
  isAuthenticated(),
  validate(AccountSchema, 'body'),
  createAccountHandler,
); */
router.get('/:id', validate(AccountSchema, 'params'), getAccountByIdHandler);
router.delete('/:id', hasRole(['user']), deleteAccountHandler);
router.patch('/:id', isAuthenticated(), updateAccountHandler);

module.exports = router;
