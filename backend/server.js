const express = require('express');
const dotenv = require('dotenv').config();
const productRoutes = require('./routes/productRoutes');
const colors = require('colors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();

connectDB();


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);



app.listen(process.env.PORT, ()=>{

    console.log("Server running".green.inverse);
});