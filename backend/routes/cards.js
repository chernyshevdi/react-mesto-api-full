const cardRouter = require('express').Router();
const {
  getCards, createCard, deleteCard, putLikeCard, dislikeCard,
} = require('../controllers/cards');

const {
  createCardValidity,
  cardIdValidity,
} = require('../middlewares/validity');

cardRouter.get('/cards', getCards);

cardRouter.post('/cards', createCardValidity, createCard);

cardRouter.delete('/cards/:cardId', cardIdValidity, deleteCard);

cardRouter.put('/cards/:cardId/likes', cardIdValidity, putLikeCard);

cardRouter.delete('/cards/:cardId/likes', cardIdValidity, dislikeCard);

module.exports = cardRouter;
