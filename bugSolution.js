const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Validate user data
  if (!user.name || !user.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  // ... other code to handle user creation, with error handling
  try {
    // Database operation
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // Database operation to fetch user by ID
    const user = await db.getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});