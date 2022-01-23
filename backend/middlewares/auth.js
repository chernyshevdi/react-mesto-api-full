const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../utils/errors/unauthorized');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization)
  let payload;
  console.log(payload)
  try {
    payload = jwt.verify(authorization, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
    console.log(payload)
  } catch (err) {
    console.log(err)
    throw new UnauthorizedError('Необходима авторизация');
  }
  req.user = payload;
  return next();
};
