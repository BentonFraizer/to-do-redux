const express = require('express');
const session = require('express-session');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const sessionConfig = require('./config/session');
// const mainRouter = require('./routes/views/main.routes');
// const authRouter = require('./routes/views/auth.routes');
const authApiRouter = require('./routes/api/authApi.routes');
const questionsApiRouter = require('./routes/api/questionsApi.routes');
const themesApiRouter = require('./routes/api/themesApi.routes');
const historyRouter = require('./routes/api/history.routes');
// const adsApiRouter = require('./routes/api/ads.routes');

const app = express();

// настраиваем сервер с помощью плагинов (миддлварок)
app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet());

// роутинг
// app.use(mainRouter);
// app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
app.use('/api/questions', questionsApiRouter);
app.use('/api/themes', themesApiRouter);
app.use('/api/history', historyRouter);

const { PORT } = process.env;
app.listen(PORT, () => console.log(`Server rabora on port ${PORT}`));
