const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
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
const allowedCors = [
  'https://praktikum.tk',
  'http://praktikum.tk',
  'localhost:3000',
  'http://api.chernyshevdi.nomoredomains.rocks',
  'http://chernyshevdi.nomoredomains.rocks',
];

const { PORT = 3000 } = process.env;

const app = express();

app.use(helmet());
app.use(bodyParser.json()); // для сборки JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(requestLogger);

app.use(function(req, res, next) { 
  const { origin } = req.headers; // Сохраняем источник запроса в переменную origin
  const { method } = req; // Сохраняем тип запроса (HTTP-метод) в соответствующую переменную
  // Значение для заголовка Access-Control-Allow-Methods по умолчанию (разрешены все типы запросов)
  const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE"; 
  const requestHeaders = req.headers['access-control-request-headers']; 
  // проверяем, что источник запроса есть среди разрешённых 
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', "*");
  }
  // Если это предварительный запрос, добавляем нужные заголовки
  if (method === 'OPTIONS') {
  // разрешаем кросс-доменные запросы любых типов (по умолчанию) 
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  } 
  next();
})

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

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
