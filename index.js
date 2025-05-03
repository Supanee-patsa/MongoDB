import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/MyDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define Mongoose schema and model
const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
});
const User = mongoose.model('User', userSchema);

// GET all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.status(200).json(users); // Return the user list
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// POST a new user
app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create user' });
  }
});

// PUT update a user by ID
app.put('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const userUpdated = await User.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!userUpdated) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(userUpdated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update user' });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userDeleted = await User.findByIdAndDelete(id);
    if (!userDeleted) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete user' });
  }
}
);

// Start server
app.listen(3000, () => {
  console.log('🚀 Server is running at http://localhost:3000');
});
