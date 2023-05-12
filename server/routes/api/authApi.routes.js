const authApiRouter = require('express').Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

authApiRouter.post('/register', async (req, res) => {
  try {
    const { login, password, repeat } = req.body;
    if (login && password && repeat) {
      if (password !== repeat) {
        res.status(403).json({ success: false, message: 'Пароли не совпадают' });
        return;
      }

      const existingUser = await User.findOne({ where: { login } });
      if (existingUser) {
        res.status(409).json({
          success: false,
          message: 'Пользователь с таким логином уже существует',
        });
        return;
      }

      const user = await User.create({
        login,
        password: await bcrypt.hash(password, 5),
      });

      req.session.userId = user.id;
      res.status(201).json({ success: true, user });
    } else {
      res.status(409).json({ success: false, message: 'Запоните все поля' });
    }
  } catch (error) {
    console.error(error);
  }
});

authApiRouter.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({ where: { login } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.json({
        success: false,
        message: 'Нет такого пользователя, либо пароли не совпадают',
      });
      return;
    }
    req.session.userId = user.id;
    console.log('-->', req.session.userId);
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
  }
});

authApiRouter.get('/check', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const user = await User.findOne({
        where: { id: userSession },
      });
      res.status(200).json({ user });
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

authApiRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('user_sid').json({ success: true });
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = authApiRouter;
