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
        required: true,
        unique: true
    },
    adressFacturation: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        adress: {
            type: String
        },
        number: {
            type: Number
        },
        flatNumber: {
            type: String
        },
        postCode: {
            type: Number
        },
        city: {
            type: String
        },
        country: {
            type: String
        }
    },
    adressDelivery: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        },
        adress: {
            type: String
        },
        number: {
            type: Number
        },
        flatNumber: {
            type: String
        },
        postCode: {
            type: Number
        },
        city: {
            type: String
        },
        country: {
            type: String
        }
    },
    password: {
        type: String,
        required: true
    },
    favorites: {
        type: Array
    }
});

userSchema.statics.signup = async function (firstName, lastName, email, password) {

    if(!email || !password || !firstName || !lastName) {
        throw Error('All required fields must be filled');
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

userSchema.statics.login = async function(email, password) {

    if(!email || !password) {
        throw Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if(!user) {
        throw Error('Incorrect email');
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) {
        throw Error('Incorrect password');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);