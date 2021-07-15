const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Dudu July 15 2021!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
