const themesApi = require('express').Router();
const { Theme } = require('../../db/models');

themesApi.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({});

    res.json(themes);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = themesApi;
