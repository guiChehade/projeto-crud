const mongoose = require('mongoose');

// definindo um schema
const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    age: Number,
    email: String,
    password: String,
});

// MVC - Model View Controller
const Model = mongoose.model('Customers', userSchema);

module.exports = Model;