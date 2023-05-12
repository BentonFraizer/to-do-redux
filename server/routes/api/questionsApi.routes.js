const questionsApi = require('express').Router();
const { Question } = require('../../db/models');

questionsApi.get('/', async (req, res) => {
  try {
    const questions = await Question.findAll({});

    res.json(questions);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = questionsApi;
