const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    customerId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of String
        required: true,
        auto: true, // This will automatically generate an ObjectId
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Customer', customerSchema);
