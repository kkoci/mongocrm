import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

const CustomerList = () => {
    const { customers, setCustomers } = useContext(CustomerContext);
    const [search, setSearch] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState(customers);

    useEffect(() => {
        const fetchCustomers = async () => {
            try {
                const response = await fetch('/api/customers');
                const data = await response.json();
                setCustomers(data);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();
    }, [setCustomers]);

    useEffect(() => {
        setFilteredCustomers(
            customers.filter((customer) =>
                customer.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, customers]);

    return (
        <div>
            <h2>Customer List</h2>
            <input
                type="text"
                placeholder="Search customers..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <ul>
                {filteredCustomers.map((customer) => (
                    <li key={customer._id}>
                        <Link to={`/customer/${customer._id}`}>{customer.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomerList;
