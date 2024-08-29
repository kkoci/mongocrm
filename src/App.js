import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomerList from './components/CustomerList';
import CustomerDetails from './components/CustomerDetails';
import TestForm from './components/AddCustomer';
import { CustomerProvider } from './context/CustomerContext';

function App() {
    const [customers, setCustomers] = useState([]);

    const updateCustomer = (updatedCustomer) => {
        setCustomers(customers.map(c => c.id === updatedCustomer.id ? updatedCustomer : c));
    };

    return (
        <CustomerProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<CustomerList />} />
                    <Route path="/customer/:id" element={<CustomerDetails updateCustomer={updateCustomer} />} />
                    <Route path="/add-customer" element={<TestForm />} />
                </Routes>
            </Router>
        </CustomerProvider>
    );
}

export default App;
