const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    image: {
        type: Array,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    searchName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        requireed: true
    },
    category: {
        type: String,
        required: true
    },
    informations: {
        type: Array
    },
    characteristics: {
        type: Array
    },
    quantity: {
        type: Number,
        required: true
    },
    note: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })

module.exports = mongoose.model('Products', productsSchema);


