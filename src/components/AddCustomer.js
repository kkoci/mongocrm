// src/components/AddCustomer.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TestForm Component
const TestForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted');
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit Test</button>
        </form>
    );
};

const AddCustomer = () => {
    console.log('AddCustomer component rendering');
    const [customer, setCustomer] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submission triggered');
        try {
            const response = await fetch('/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });
            console.log('Fetch completed, response:', response);
            const data = await response.json();
            console.log('Response JSON:', data);
            if (response.ok) {
                console.log('Navigation triggered');
                navigate('/');
            } else {
                console.error('Failed to add customer:', data);
            }
        } catch (error) {
            console.error('Error adding customer:', error);
        }
    };    

    return (
        <div>
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        name="name"
                        value={customer.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Email:
                    <input
                        name="email"
                        value={customer.email}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;
// export default TestForm;
