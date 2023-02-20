const Products = require('../models/productsModel');
const mongoose = require('mongoose');

exports.getProducts = async (req, res) => {
    const products = await Products.find().sort({ createdAt: -1 }).select("name price image").limit(10);

    res.status(200).json(products);
}

exports.getProductsByPopularity = async (req, res) => {
    const products = await Products.find().sort({ note: -1 }).select("name price image quantity").limit(10);

    res.status(200).json(products);
}

exports.getProductsByCategory = async (req, res) => {
    const { category } = req.params;

    const products = await Products.find({ category: category }).sort({ note: -1 });
    
    if(!category) {
        return res.status(404).json({ error: 'No such category'});
    }

    res.status(200).json(products);
}

exports.getProductByName = async (req, res) => {
    const { product } = req.params;

    const article = await Products.findOne({ name: product }).populate({ path: 'Comments', strictPopulate: false });

    if(!article) {
        return res.status(404).json({ error: 'No such product'} );
    }

    res.status(200).json(article);
}

exports.getProductBySearchBar = async(req, res) => {
    const { product } = req.params;

    const article = await Products.find({ searchName: {$regex: product }}, { name: 1 });

    res.status(200).json(article);
}

exports.createProduct = async (req, res) => {

    try {
        const product = await Products.create({
            ...req.body

        })

        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
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

exports.updateNote = async (req, res) => {
    const { id } = req.params;
    const { note } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json('No such ID');
    }

    const product = await Products.findOneAndUpdate({ _id: id }, {
        note: note
    })

    if(!product) {
        return res.status(404).json('No such product');
    }

    res.status(200).json(product);
}