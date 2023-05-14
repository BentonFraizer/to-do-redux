const express = require('express');
require('dotenv').config();

const tasksRouter = require('./routes/api/tasksApi.routes');
const serverConfig = require('./config/serverConfig');

const app = express();

serverConfig(app);

// роутинг
app.use('/api/tasks', tasksRouter);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server rabora on port ${PORT}`));
