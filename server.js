const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const apiRoutes = require('./routes/api');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/yourDatabaseName';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
