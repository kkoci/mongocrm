const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: {
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
    role: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Employee', employeeSchema);
