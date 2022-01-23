const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  let payload;

  try {
    payload = jwt.verify(req.cookies.token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    console.log(payload)
  } catch (err) {
    throw new UnauthorizedError('Необходима авторизация');
  }
  req.user = payload;
  return next();
};
