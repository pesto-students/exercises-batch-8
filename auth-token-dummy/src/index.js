const express = require('express');

const port = 8000;
const app = express();

const userAuthentication = (req, res, next) => {
  
  next();
};

app.use(userAuthentication);

app.get('/', (req, res) => res.send('Hello'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server listening on port: ${port}`));

module.exports = app;
