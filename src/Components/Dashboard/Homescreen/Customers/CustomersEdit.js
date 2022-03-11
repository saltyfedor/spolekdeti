import React, { useState, useEffect } from "react";
import ControlBar from "./ControlBar";
import CustomerElement from "./CustomerElement";
import apiAdress from "../../../Variables";
import './Customers.css'

const CustomersEdit = ({ token }) => {
    const [customerData, updateCustomerData] = useState()
    const [filters, updateFilters] = useState({       
        paid_base: null,
        paid_full: null
    })

    const fetchCustomers = async () => {
        const res = await fetch(`${apiAdress}admin/customers`, {
            method: 'GET',
            headers: {
            'x-access-token': token
            }
        })
        if (res.ok) {
            const data = await res.json()
            updateCustomerData(data)
        }
    }

    const fetchCustomersWithFilters = async (filters) => {
        const res = await fetch(`${apiAdress}admin/customers/filter`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'x-access-token': token
            },
            body: JSON.stringify(filters)
        })
        if (res.ok) {
            const data = await res.json()
            updateCustomerData(data)
        }
    }
    
    useEffect(() => { fetchCustomers() }, [])

    const getCustomers = () => {       

        const currentCustomerElements = customerData.map(customerObj => {
            return <CustomerElement key={customerObj.id} data={customerObj} filters={filters} token={token}/>
        })

        return currentCustomerElements
    }

    const handleFilterChange = (filtersObj) => {
        if (filtersObj.camp_id || filtersObj.capacity_id) {
            const filtersNoRedundancy = {}
            if (filtersObj.camp_id) Object.assign(filtersNoRedundancy, { camp_id: filtersObj.camp_id })
            if (filtersObj.capacity_id) Object.assign(filtersNoRedundancy, { capacity_id: filtersObj.capacity_id })           
            fetchCustomersWithFilters(filtersNoRedundancy)

        } else {
            fetchCustomers()
        }
    }
    
    const handlePaymentStatusChange = (value, type) => {       
        const newFilters = Object.assign({}, filters, { [type]: value })
        updateFilters(newFilters)
    }

    return (
        <div className="customers-container">
            <ControlBar token={token} onPaymentStatusChange={handlePaymentStatusChange} onFilter={handleFilterChange}/>
            {customerData ?
                <div className="customers-data-view">
                    <div className="top-bar">
                        <h4 className="name-cell mv10">Jméno</h4>
                        <h4 className="email-cell mv10">Email</h4>
                        <h4 className="birthnum-cell mv10">Rodné číslo</h4>
                        <h4 className="payment-cell mv10">Záloha</h4>
                        <h4 className="payment-cell mv10">Doplatek</h4>
                    </div>
                    {getCustomers()}
                </div>
                : null}           
        </div>
    )
}

export default CustomersEdit