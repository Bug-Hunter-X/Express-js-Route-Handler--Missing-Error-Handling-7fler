const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  db.getUser(userId, (err, user) => {
    if (err) {
      console.error('Database error:', err); // Log the error with more detail
      res.status(500).json({ error: 'Failed to retrieve user' }); // Send a JSON error response
    } else if (!user) {
      res.status(404).json({ error: 'User not found' }); // Send a 404 JSON response
    } else {
      res.json(user);
    }
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));