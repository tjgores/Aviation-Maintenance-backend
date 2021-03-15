require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const routes = require('./routes');
const constants = require('./constants');

const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, //allows session cookies to be sent back and forth
    optionsSuccessStatus: 200 //legacy browsers
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

// SET THIS UP for Routes
   app.use('/avmaint', routes.avmaint);
   app.use('/avmaint/all', routes.avmaint);
// app.use('/post/all', routes.post);
// app.use('/post/avmaint', routes.post);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})