const {getUsers, authLogin, getUserById, createUser} = require('./routes/users/users');
const { verifyJWT } = require('./routes/auth/auth');

const jwt = require('jsonwebtoken');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
require("dotenv-safe").config();


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.post('/login', authLogin);
app.get('/users', verifyJWT, getUsers);
app.get('/users/:id', verifyJWT, getUserById);
app.post('/users', createUser);

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })