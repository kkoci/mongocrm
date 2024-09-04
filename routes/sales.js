// routes/sales.js
const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');

// Get all sales
router.get('/', async (req, res) => {
    try {
        const sales = await Sale.find();
        res.json(sales);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one sale
router.get('/:id', async (req, res) => {
    try {
        const sale = await Sale.findById(req.params.id);
        if (!sale) return res.status(404).json({ message: 'Sale not found' });
        res.json(sale);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a sale
router.post('/', async (req, res) => {
    const sale = new Sale({
        customerId: req.body.customerId,
        productId: req.body.productId,
        dateofsale: req.body.dateofsale,
        amount: req.body.amount,
    });

    try {
        const newSale = await sale.save();
        res.status(201).json(newSale);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update a sale
router.put('/:id', async (req, res) => {
    try {
        const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSale) return res.status(404).json({ message: 'Sale not found' });
        res.json(updatedSale);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a sale
router.delete('/:id', async (req, res) => {
    try {
        const sale = await Sale.findByIdAndDelete(req.params.id);
        if (!sale) return res.status(404).json({ message: 'Sale not found' });
        res.json({ message: 'Sale deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
