const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    contactId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of String
        required: true,
        auto: true, // This will automatically generate an ObjectId
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for foreign key
        ref: 'Customer', // Reference to the Customer model
        required: true,
    },
    contact_date: {
        type: Date,
        // default: Date.now,
    },
    contact_method: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Contact', employeeSchema);

