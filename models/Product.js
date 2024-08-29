const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId, // Use ObjectId instead of String
        required: true,
        auto: true, // This will automatically generate an ObjectId
    },
    product_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Float32Array,
        required: true,
    },
});

module.exports = mongoose.model('Product', employeeSchema);

