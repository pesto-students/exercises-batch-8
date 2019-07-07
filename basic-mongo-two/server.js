const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const project = require('./routes/project.route');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const databaseUrl = 'mongodb://localhost:27017/pesto-day-19';
const mongoDB = process.env.MONGODB_URI || databaseUrl;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use('/projects', project);
const port = 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
