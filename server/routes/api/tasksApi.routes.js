const tasksRouter = require('express').Router();
const uuid = require('uuid');
const { Task } = require('../../db/models');

tasksRouter.get('/', async (req, res) => {
  try {
    const tasks = await Task.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

tasksRouter.post('/add', async (req, res) => {
  const tasks = await Task.findAll();
  const identificator = String(Number(tasks.length) + 1);
  try {
    const task = await Task.create({
      id: identificator,
      userId: req.body.userId,
      title: req.body.title,
      completed: req.body.completed,
    });
    console.log('Задача успешно создана');
    res.status(200).json({ task, success: true });
  } catch (error) {
    console.log('Упал с ошибкой');
    res.status(404).json({ message: error });
  }
});

module.exports = tasksRouter;
