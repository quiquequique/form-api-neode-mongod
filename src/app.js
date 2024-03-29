require('dotenv').config();
const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');
const notesRoutes = require('./routes/notes');

const app = express();

// settings
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/users', usersRoutes);
app.use('/api/notes', notesRoutes);

module.exports = app;
