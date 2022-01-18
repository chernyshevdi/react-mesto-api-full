const userRouter = require('express').Router();
const {
  getUsers, getUser, updateUser, updateAvatar, getUserInfo,
} = require('../controllers/users');
const {
  userIdVadility,
  updateUserValidity,
  updateAvatarValidity,
} = require('../middlewares/validity');

userRouter.get('/users', getUsers);

userRouter.get('/users/me', getUserInfo);

userRouter.patch('/users/me', updateUserValidity, updateUser);

userRouter.patch('/users/me/avatar', updateAvatarValidity, updateAvatar);

userRouter.get('/users/:userId', userIdVadility, getUser);

module.exports = userRouter;
