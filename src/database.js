require('dotenv').config();
const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test-mern-app';

mongoose.connect(URI, {
  useNewUrlParser: true,
  // useCreateIndex: true,
});

const { connection } = mongoose;

connection.once('open', () => {
  console.log('DB is connected');
});
