const { celebrate, Joi } = require('celebrate');

const linkValidity = /^https?:\/\/(w{3}\.)*[a-z0-9-][-._~:/?[\]#@!$&'()*+,;=]*#?/;

const userIdVadility = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().length(24).alphanum()
      .required(),
  }),
});

const updateUserValidity = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
});

const createUserValidity = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(linkValidity),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const updateAvatarValidity = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(linkValidity),
  }),
});

const loginValidity = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const createCardValidity = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(linkValidity),
  }),
});

const cardIdValidity = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().alphanum().required(),
  }),
});

module.exports = {
  userIdVadility,
  updateUserValidity,
  createUserValidity,
  updateAvatarValidity,
  loginValidity,
  createCardValidity,
  cardIdValidity,
};
