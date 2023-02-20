const Comments = require('../models/commentModel');

exports.createComment = async (req, res) => {
    const { id } = req.params;
    const { stars, shortTitle, comment } = req.body;

    try {
        const newComment = await Comments.create({
            stars, 
            shortTitle, 
            comment,
            article: id
        })

        res.status(200).json(newComment);
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

exports.getComments = async (req, res) => {
    const { id } = req.params;

    try {
        const comments = await Comments.find({ article: id })

        res.status(200).json(comments);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.getStars = async (req, res) => {
    const { id } = req.params;

    try {
        const stars = await Comments.find({ article: id }).select('stars');

        res.status(200).json(stars);
    } catch(error) {
        res.status(400).json({ error: error.message })
    }
}