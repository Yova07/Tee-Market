const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    stars: {
        type: Number,
        required: true
    },
    shortTitle: String,
    comment: String,
    article: {
        type: mongoose.Schema.Types.ObjectId,    
    },
})

module.exports = mongoose.model('Comments', commentSchema);
