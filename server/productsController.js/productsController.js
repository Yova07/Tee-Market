const Products = require('../models/productsModel');
const mongoose = require('mongoose');

exports.getProducts = async (req, res) => {
    const products = await Products.find({}).sort({ createdAt: -1 });

    res.status(200).json(products);
}

exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    const products = await Products.find({ category: category });
    
    if(!category) {
        return res.status(404).json({ error: 'No such category'});
    }

    res.status(200).json(products);
}

exports.getProductByName = async (req, res) => {
    const { product } = req.params;

    const article = await Products.findOne({ name: product.split('-').join(' ') });

    if(!article) {
        return res.status(404).json({ error: 'No such product'} );
    }

    res.status(200).json(article);
}

exports.createProduct = async (req, res) => {
    const { image, name, price } = req.body;

    try {
        const product = await Products.create({
            image,
            name,
            price
        })

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.createComment = async (req, res) => {
    const { articleId, stars, shortTitle, comment } = req.body;

    try {
        const newComment = await Products.addComment(articleId, stars, shortTitle, comment)

        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such ID'});
    }

    const product = await Products.findByIdAndDelete(id);

    if(!product) {
        return res.status(404).json({ error: 'No such product'} );
    }

    res.status(200).json(product);
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such ID'} );
    }

    const product = await Products.findByIdAndUpdate(id, {
        ...req.body
    });

    if(!product) {
        return res.status(404).json({ error: 'No such product'} );
    }

    res.status(200).json(product);
}