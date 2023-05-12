const historyRouter = require('express').Router();

const { History, User, sequelize } = require('../../db/models');

historyRouter.get('/check', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const history = await History.findAll({
        where: { user_id: userSession },
      });
      res.status(200).json({ history });
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

historyRouter.get('/best', async (req, res) => {
  try {
    const best = await History.findAll({
      attributes: [[sequelize.fn('max', sequelize.col('score')), 'maxScore']],
      include: [
        {
          model: User,
        },
      ],
      group: ['User.id'],
    });

    res.status(200).json({ best });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

historyRouter.post('/save', async (req, res) => {
  try {
    const userSession = req.session.userId;
    if (userSession) {
      const history = await History.create({
        user_id: req.session.userId,
        score: req.body.score,
        date: new Date(),
      });

      if (history) {
        res.status(200).json({ history, success: true });
      }
    } else {
      res.end();
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = historyRouter;
