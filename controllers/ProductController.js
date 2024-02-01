const Product = require('../models/Product');

exports.createProduct = async (req, res) => {
    const { name, description, price, variants } = req.body;
    const product = new Product({
        name,
        description,
        price,
        variants
    });
    await product.save();
    res.json(product);
};

exports.getProducts = async (req, res) => {
    const products = await Product.find().exec();
    res.json(products);
};

exports.getProduct = async (req, res) => {
    // Logic to get a single product
};

exports.updateProduct = async (req, res) => {
    // Logic to update a product
};

exports.deleteProduct = async (req, res) => {
    // Logic to delete a product
};