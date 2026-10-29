// Tasks 4-6: Express server with routes and a 404 handler
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// GET / -> welcome text
app.get('/', (req, res) => {
  res.status(200).send('Welcome to Lab 1: Node.js and Express server');
});

// GET /about -> JSON with name and section
app.get('/about', (req, res) => {
  res.status(200).json({
    name: 'Shaik Suheal',
    section: 'CSE-GEN-AI 2C 112'
  });
});

// GET /time -> current date and time
app.get('/time', (req, res) => {
  res.status(200).send(`Current date and time: ${new Date()}`);
});

// Unknown path -> 404 (must be placed after all other routes)
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
