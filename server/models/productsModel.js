const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productsSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    name: {
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
    }
}, 
{
    timestamps: true
})

module.exports = mongoose.model('Products', productsSchema);