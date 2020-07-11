const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    title: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
});

module.exports = mongoose.model('User', User);