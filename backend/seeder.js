const users = require('./data/users');
const User = require('./models/userModel');
const colors = require('colors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const Product = require('./models/productModel');
const products = require('./data/products');

connectDB();

const importData = async () => {

   try {

        await User.deleteMany();
        await Product.deleteMany();

        const importedUsers = await User.insertMany(users);
        const adminUser = importedUsers[0]._id;
        const sampleProducts = products.map(product => {
            return {
                ...product,
                user:adminUser
            }
        });

        await Product.insertMany(sampleProducts);
        console.log("Data imported ".green.inverse);
        process.exit();

   } catch (error) {
     
         console.log(`${error}`.red.inverse);
        process.exit(1);
   }
}

const deleteData = async () => {

    try {
        await User.deleteMany();
        await Product.deleteMany();


        console.log("Data deleted".green.underline);
        process.exit();
    } catch (error) {
        
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    deleteData();
}else{
    importData();
}