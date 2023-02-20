const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3h' });
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);

        const token = createToken(user._id);

        res.status(200).json({
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            adressDelivery: user.adressDelivery,
            adressFacturation: user.adressFacturation,
            favorites: user.favorites,
            token
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

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

exports.getUser = async (req, res) => {

    const user = await User.findOne({ _id: req.user });

    if (!user) {
        return res.status(404).json({ error: 'User doesn\'t exists' })
    }

    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        adressDelivery: user.adressDelivery,
        adressFacturation: user.adressFacturation,
        favorites: user.favorites
    });
}

exports.updateDelivery = async (req, res) => {

    const { firstName, lastName, adress, number, flatNumber, postCode, city, country } = req.body;

    if (!firstName || !lastName || !adress || !number || !flatNumber || !postCode || !city || !country) {
        return res.status(400).json('All the fields must be filled');
    }

    const user = await User.findByIdAndUpdate(req.user, {
        adressDelivery: {
            ...req.body
        }
    });

    if (!user.adressFacturation) {
        await User.findByIdAndUpdate(req.user, {
            adressFacturation: {
                ...req.body
            }
        })
    }

    if (!user) {
        return res.status(404).json({ error: 'User Doesn\'t exists' })
    }

    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        adressDelivery: { ...req.body },
        adressFacturation: user.adressFacturation,
        favorites: user.favorites
    });
}

exports.updateFacturation = async (req, res) => {

    const { firstName, lastName, adress, number, flatNumber, postCode, city, country } = req.body;

    if (!firstName || !lastName || !adress || !number || !flatNumber || !postCode || !city || !country) {
        return res.status(400).json('All the fields must be filled');
    }

    const user = await User.findByIdAndUpdate(req.user, {
        adressFacturation: {
            ...req.body
        }
    });

    if (!user) {
        return res.status(404).json({ error: 'User Doesn\'t exists' })
    }

    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        adressDelivery: user.adressDelivery,
        adressFacturation: { ...req.body },
        favorites: user.favorites
    });
}

exports.updateFavorites = async (req, res) => {
    const { _id } = req.body

    const exists = await User.findOne({ _id: req.user, favorites: { $elemMatch: { _id: _id } } });

    if (exists) {
        return res.status(400).json('Already in the favorites');
    }

    const user = await User.findOneAndUpdate({ _id: req.user }, {
        $push: {
            favorites: { ...req.body }
        }
    })

    if (!user) {
        return res.status(404).json({ error: "User doesn't exists" });
    }

    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        adressDelivery: user.adressDelivery,
        adressFacturation: user.adressFacturation,
        favorites: [...user.favorites, { ...req.body }]
    });

}

exports.deleteFavorite = async (req, res) => {
    const { id } = req.params;

    await User.findOneAndUpdate({ _id: req.user }, {
        $pull: { favorites: { _id: id } }
    })

    const user = await User.findOne({ _id: req.user });


    res.status(200).json({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        adressDelivery: user.adressDelivery,
        adressFacturation: user.adressFacturation,
        favorites: user.favorites
    })
}