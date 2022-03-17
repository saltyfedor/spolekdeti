import React, {useState} from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import apiAdress from "../../../Variables";

const CustomerElement = ({ data, filters}) => {
    const linkRef = React.createRef();
    const token = useSelector(state => state.dash.token)
    const [displayDetail, updateDisplayDetail] = useState(false)
    
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

    const getCustomerDoc = async () => {
        const res = await fetch(`${/*apiAdress*/'http://localhost:3001/'}customer/document`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'x-access-token': token },
            body: JSON.stringify(data)
        })

        if (res.ok) {
            const blob = await res.blob()        
            const href = window.URL.createObjectURL(blob);
            const a = linkRef.current;
            a.download = `${data.full_name}_prihlaska.docx`;
            a.href = href;
            a.click();
            a.href = '';
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
            <div>
                <div className="customer-display-container">
                    <p className="name-cell mv10">{data.full_name}</p>
                    <p className="email-cell mv10">{data.parent_email}</p>
                    <p className="birthnum-cell mv10">{data.birth_number}</p>
                    <div className="payment-cell mv10">
                        <input className="payment-checkbox" type="checkbox" defaultChecked={data.paid_base} onChange={(e) => handlePaymentChange('paid_base', e.target.checked)}></input>
                    </div>
                    <div className="payment-cell mv10">
                        <input className="payment-checkbox" type="checkbox" defaultChecked={data.paid_full} onChange={(e) => handlePaymentChange('paid_full', e.target.checked)}></input>
                    </div>
                    <div className="customer-button-container">
                    <button className="customer-detail-button mr10" onClick={getCustomerDoc}>Přihláška</button>
                        <button className="customer-detail-button" onClick={() => updateDisplayDetail(!displayDetail)}>Detail</button>
                    </div>
                </div>
                {displayDetail ?
                    <div className="customer-detail-container">
                        <p><span className="customer-detail-label">Registrován:</span>{moment.utc(data.added).format('DD.MM.YYYY')}</p>
                        <p><span className="customer-detail-label">Narozen/á:</span>{moment(data.birthday).format('DD.MM.YYYY')}</p>
                        <p><span className="customer-detail-label">Rodné číslo:</span>{data.birth_number}</p>
                        <p><span className="customer-detail-label">Jméno matky:</span>{data.mother_fullname}</p>
                        <p><span className="customer-detail-label">Telefon matky:</span>{data.mother_phone}</p>
                        <p><span className="customer-detail-label">Jméno otce:</span>{data.father_fullname}</p>
                        <p><span className="customer-detail-label">Telefon otce:</span>{data.father_phone}</p>
                    </div>
                    : null}                
                <a ref={linkRef}/>
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