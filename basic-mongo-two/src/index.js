const express = require('express');
const routes = require('../routes/index');

const app = express();
const PORT = 8000;

app.use(express.json());

app.use('/projects', routes);
app.get('/health-check', (req, res) => res.send('I am okay'));

app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
