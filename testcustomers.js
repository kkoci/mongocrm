const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: String,
    email: String,
});

const Customer = mongoose.model('Customer', customerSchema);

const mongoURI = 'mongodb://127.0.0.1:27017/myCRM';
mongoose.connect(mongoURI, {})
    .then(async () => {
        console.log('MongoDB connected');

        // Test adding a customer
        const newCustomer = new Customer({ name: 'Test User', email: 'testuser@example.com' });
        await newCustomer.save();
        console.log('Customer added:', newCustomer);

        mongoose.connection.close();
    })
    .catch(err => console.log(err));
