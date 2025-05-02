const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mynewdatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('MongoDB connection successful');
});
