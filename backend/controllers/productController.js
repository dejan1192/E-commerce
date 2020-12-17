const Product = require('../models/productModel');

exports.getProducts = async (req, res, next) => {

    const products = await Product.find({});

    res.json({
        products
    });
};


exports.getProduct = async (req, res, next) => {

    const id = req.params.id;
    const product = await Product.findById(id);

    res.json({
        product
    })

};