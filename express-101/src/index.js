const express = require('express');

const app = express();
const port = 3000;

// 1) Create Routes
app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});
// 2) Start server on port 3000

app.listen(port, () => console.log(`App listening on port ${port}!`));
module.exports = app;
