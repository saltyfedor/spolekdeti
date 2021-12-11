import React from "react";
import { useSelector } from "react-redux";
import apiAdress from "../../../Variables";

const CustomerElement = ({ data, filters }) => {
    const token = useSelector(state => state.dash.token)
    console.log(token)
    
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



    const handlePaymentChange = async (type, value) => {
        const response = await fetch(`${apiAdress}customer/payment/status`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: data.id,
                type: type,
                value: value,
                token: token
            })
        })       
    }

    if (checkFilters()) {
        return (
            <div className="customer-display-container">
                <p className="name-cell mv10">{data.full_name}</p>
                <p className="email-cell mv10">{data.parent_email}</p>
                <div className="payment-cell mv10">
                    <input className="payment-checkbox" type="checkbox" defaultChecked={data.paid_base} onChange={(e) => handlePaymentChange('paid_base', e.target.checked)}></input>
                </div>
                <div className="payment-cell mv10">
                    <input className="payment-checkbox" type="checkbox" defaultChecked={data.paid_full} onChange={(e) => handlePaymentChange('paid_full', e.target.checked)}></input>
                </div>
            </div>
            
        )
    } else {
        return(null)
    }
 }

export default CustomerElement

/*
   <p className="payment-cell mv10">{data.paid_base ? 'Zaplacená' : 'Nezaplacená'}</p>
                <p className="payment-cell mv10">{data.paid_full? 'Zaplacený' : 'Nezaplacený'}</p>*/