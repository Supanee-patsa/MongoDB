

const express = require('express');
const mongoose = require('mongoose');
const usersRoutes = require('/routes/users');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/mynewdatabase');

app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
