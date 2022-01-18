const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const {
  createUserValidity,
  loginValidity,
} = require('./middlewares/validity');
const NotFoundError = require('./utils/errors/notFound');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const { PORT = 3000 } = process.env;

const app = express();
app.use(helmet());
app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(requestLogger);
app.post('/signin', loginValidity, login);
app.post('/signup', createUserValidity, createUser);

app.use(auth);

app.use(userRouter);
app.use(cardRouter);

app.use('*', () => {
  throw new NotFoundError('Такого адреса не существует.');
});

app.use(errorLogger);
app.use(errors());

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = statusCode === 500 ? 'Ошибка сервера' : err.message;
  res
    .status(statusCode)
    .json({ message: message});
  return next();
});

mongoose.connect('mongodb://localhost:27017/mestodb');
app.listen(PORT, () => {
  console.log(`Сервер запустился на порту ${PORT}`);
});
