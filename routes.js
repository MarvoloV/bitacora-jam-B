const user = require('./api/user');
const operation = require('./api/operation');
const account = require('./api/account');
const upload = require('./api/upload');
const authLocal = require('./auth/local');

function routes(app) {
  app.use('/api/user', user);
  app.use('/api/account', account);
  app.use('/api/operation', operation);
  app.use('/api/upload', upload);
  app.use('/auth/local', authLocal);
}

module.exports = routes;
