import React from "react";

const CustomerElement = ({ data, filters }) => {
    
    const checkFilters = () => {
        if (filters.paid_base === null && filters.paid_full === null) return true
        else {
            if (data.paid_base === filters.paid_base || filters.paid_base === null) {
                if (data.paid_full === filters.paid_full || filters.paid_full === null) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
    }

    if (checkFilters()) {
        return (
            <div className="customer-display-container">
                <p className="name-cell mv10">{data.full_name}</p>
                <p className="email-cell mv10">{data.parent_email}</p>
                <p className="payment-cell mv10">{data.paid_base ? 'Zaplacená' : 'Nezaplacená'}</p>
                <p className="payment-cell mv10">{data.paid_full? 'Zaplacený' : 'Nezaplacený'}</p>
            </div>
            
        )
    } else {
        return(null)
    }
 }

export default CustomerElement