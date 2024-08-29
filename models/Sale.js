const mongoose = require('mongoose');

const saleSchema = new mongoose.Schema({
    saleId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of String
        required: true,
        auto: true, // This will automatically generate an ObjectId
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for foreign key
        ref: 'Customer', // Reference to the Customer model
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId for foreign key
        ref: 'Product', // Reference to the Customer model
        required: true,
    },
    dateofsale: {
        type: Date,
        // default: Date.now,
    },
    amount: {
        type: Float64Array,
        required: true,
    },
});

module.exports = mongoose.model('Sale', employeeSchema);

