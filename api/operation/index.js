const { Router } = require('express');
const { OperationSchema } = require('./operation.schema');
const { validate } = require('../../middleware/validateRequest');

const {
  createOperationHandler,
  deleteOperationHandler,
  getAllOperationsHandler,
  getOperationByIdHandler,
  updateOperationHandler,
} = require('./operation.controller');

const { isAuthenticated, hasRole } = require('../../auth/auth.services');

const router = Router();

router.get('/', getAllOperationsHandler);
/* router.post('/', isAuthenticated(), createOperationHandler); */
router.post(
  '/',
  isAuthenticated(),
  validate(OperationSchema, 'body'),
  createOperationHandler,
);
router.get(
  '/:id',
  validate(OperationSchema, 'params'),
  getOperationByIdHandler,
);
router.delete('/:id', hasRole(['user']), deleteOperationHandler);
router.patch('/:id', isAuthenticated(), updateOperationHandler);

module.exports = router;
