const express = require('express');
const port = 3000;

const routes = require('./routes/routes');

const app = express();

app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => 
  console.log(`Servidor em http://localhost:${port}`)
);