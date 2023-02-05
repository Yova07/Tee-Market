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
    comment: {
        type: Array,
        required: false
    }
     
}, 
{
    timestamps: true
})

productsSchema.static.addComment = async function (articleId, stars, shortTitle, comment) {

    const product = await this.findOne({ _id: articleId });

    const newComment = await product.comment.push({
        stars, 
        shortTitle,
        comment
    })

    return newComment;
}

module.exports = mongoose.model('Products', productsSchema);


