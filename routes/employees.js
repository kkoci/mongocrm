// routes/employees.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one employee
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a employee
router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


// Update a employee
router.put('/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a employee
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
