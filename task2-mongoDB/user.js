const express = require('express');
const mongoose = require('mongoose');
const app = express();

// 1. Connect to MongoDB
mongoose.connect('mongodb+srv://achyuthnandala_db_user:fr78tIEDPjLtHaQC@cluster0.m7hqpgq.mongodb.net/Stackly?appName=Cluster0');

// 2. Create users table structure
const User = mongoose.model('User', {
  name: String,
  email: String,
  age: Number
});

// 3. Add sample data (2 users)
User.countDocuments().then(count => {
  if (count == 0) {
    User.insertMany([
      { name: "John", email: "john@test.com", age: 25 },
      { name: "David", email: "david@test.com", age: 28 }
    ]);
  }
});

// 4. Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to Stackly');
});

// 5. Get all users route
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// 6. Start server
app.listen(4000, () => console.log('Server running on 4000'));
