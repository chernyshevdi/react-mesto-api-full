const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/unauthorized');
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { Authorization } = req.headers;
  let payload;

  try {
    payload = jwt.verify(Authorization, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  req.user = payload;
  return next();
};
