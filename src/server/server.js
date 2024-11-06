// src/server/server.js

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Set up SQLite database
const db = new sqlite3.Database('./ecommerce.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to the SQLite database.');
  }
});

// Define routes
app.get('/api/products', (req, res) => {
  db.all('SELECT * FROM products', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ products: rows });
    }
  });
});

// POST route to add products (optional)
app.post('/api/products', (req, res) => {
  const { name, description, price, image_url } = req.body;
  const sql = 'INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)';
  db.run(sql, [name, description, price, image_url], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
