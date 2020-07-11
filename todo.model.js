const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    responsible: {
        type: String
    },
    priority: {
        type: String
    },
    completed: {
        type: Boolean
    },
    day: {
        type: Number
    },
    assignedTo: {
        type: String
    }
});

module.exports = mongoose.model('Todo', Todo);