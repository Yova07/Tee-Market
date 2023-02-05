const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d'});
}

exports.signupUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    try {
        const user = await User.signup(firstName, lastName, email, password);

        const token = createToken(user._id);

        res.status(200).json({ firstName, lastName, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}