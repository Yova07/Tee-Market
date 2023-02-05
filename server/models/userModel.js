const mongoose = require('mongoose');
const validator = require('validator')
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.static.signup = async function (firstName, lastName, email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid');
    }

    const exists = await this.findOne({ email });

    if(exists) {
        throw Error('Email already exists');
    }
    if(!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ firstName, lastName, email, password: hash });

    return user;
}

module.exports = mongoose.model('User', userSchema);