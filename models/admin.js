const mongoose = require('mongoose');

const Admin = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Admin', Admin);
