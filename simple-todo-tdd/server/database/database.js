const mongoose = require('mongoose');

const MONGO_URL = 'mongodb://localhost:27017';
const DB_NAME = 'todo-app';

mongoose.connect(`${MONGO_URL}/${DB_NAME}`, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We are connected');
});

module.exports = {
  mongoose,
};
