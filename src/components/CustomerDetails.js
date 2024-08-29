import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const CustomerDetails = ({ updateCustomer }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const response = await fetch(`/api/customers/${id}`);
                const data = await response.json();
                setCustomer(data);
            } catch (error) {
                console.error('Error fetching customer:', error);
            }
        };
        fetchCustomer();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCustomer((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`/api/customers/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(customer),
            });
            const updatedCustomer = await response.json();
            updateCustomer(updatedCustomer); // Update the customer in your state
            navigate('/');
        } catch (error) {
            console.error('Error updating customer:', error);
        }
    };

    return (
        <div>
            <h2>Customer Details</h2>
            <form>
                <label>
                    Name:
                    <input name="Name" value={customer.name} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input name="Email" value={customer.email} onChange={handleInputChange} />
                </label>
                <label>
                    Email:
                    <input 
                        name="Created At" 
                        value={customer.createdAt} 
                        readOnly
                    />
                </label>
                <button type="button" onClick={handleSave}>
                    Save
                </button>
            </form>
        </div>
    );
};

export default CustomerDetails;
