// This load the products as a javascript object from products.js file
const products = require('./products');
console.log(products);

// Fill in your code here to build NodeJS + Express + EJS web application
// Import the express library
const express = require('express');

// Create an instance of the express application
const app = express();

// Setting a view engine 
app.set('view engine', 'ejs');

// Define a root route
app.get('/', (req, res) => {
    res.render('home', { product: products });
});

// Define a product route
app.post('/product/:id', (req, res) => {

    res.render('/product', { product: products });
});

// Define a form order route
app.get('/order', (req, res) => {
    res.render('order', { product: products});
});

// Serve static files from public
app.use(express.static('static-website-materials'));


// Start the server and listen on port 4000
app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});