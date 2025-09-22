const express = require('express');
const router = express.Router();

// Mock database of users
const users = [
  { id: 1, name: 'Alice from API', role: 'Admin' },
  { id: 2, name: 'Bob from API', role: 'User' },
  { id: 3, name: 'Charlie from API', role: 'Moderator' },
];

// GET /api/users - Returns all users
router.get('/', (req, res) => {
  console.log('Request received for /api/users');
  res.json(users);
});

module.exports = router;