const express = require('express');
const cors = require('cors');
const usersRoutes = require('./routes/users');

const app = express();
const PORT = 5000;

// Middleware
// Enable CORS for all routes, allowing our frontends to connect
app.use(cors());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// API Routes
app.use('/api/users', usersRoutes);

// Simple root route to confirm server is working
app.get('/', (req, res) => {
  res.send('<h1>API Server is Running</h1><p>Try accessing /api/users</p>');
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Backend server is running at http://localhost:${PORT}`);
});