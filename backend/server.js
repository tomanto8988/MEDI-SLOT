'use strict';

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
const dbURI = 'your_mongodb_connection_string'; // Replace with your MongoDB URI
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// API routes
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from Medi-Slot API!' });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
