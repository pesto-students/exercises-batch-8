const express = require('express');
const favorites = require('./favorites');

const app = express();
const port = 3000;

app.use(favorites);

app.get('/', (req, res) => res.send('Hello'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
