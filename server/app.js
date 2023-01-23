require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const productsRoutes = require('./routes/products');

// Init express
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/products', productsRoutes);

// Connect to the database
mongoose.connect(process.env.MONG_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Server runs on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    }) 

