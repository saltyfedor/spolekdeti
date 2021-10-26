import React, { useState, useEffect } from 'react'
import './Registration.css'

const CampRegistrationParents = ({ handleNext }) => {
    const [allowNext, updateAllowNext] = useState(false)
    const [customerInfo, updateCustomerInfo] = useState(
        {
            mname: '',
            fname: '',
            mphone: '',
            fphone: '',
        }
    )

    const updateCustomer = (newVal) => {
        const newInfo = { ...customerInfo }
        Object.assign(newInfo, newVal)        
        updateCustomerInfo(newInfo)
    }

    const checkCustomer = () => {
        const checkPhoneNum = (num) => {
            if (num.length === 9 || num.length === 13) return true
            else return false
        }

        if (customerInfo.mname.length > 0 && customerInfo.fname.length > 0 && checkPhoneNum(customerInfo.mphone) && checkPhoneNum(customerInfo.fphone)) {
            updateAllowNext(true)
        }
        else {
            updateAllowNext(false)
        }       
        
    }

    useEffect(checkCustomer, [customerInfo])

    return (
        <>
             <h3 className="registration-section-title">Rodiče</h3>                        
                       <div className="registration-input-group">
                           <p className="input-label">Jméno matky*</p>
                           <input className="registration-input" maxLength='30' onChange={(event)=>{updateCustomer({mname:event.target.value})}}/>
                       </div>
                       <div className="registration-input-group">
                           <p className="input-label">Telefon matky*</p>
                           <input className="registration-input" maxLength='13' onChange={(event)=>{updateCustomer({mphone:event.target.value})}}/>
                       </div>
                       <div className="registration-input-group">
                           <p className="input-label">Jméno otce*</p>
                           <input className="registration-input" maxLength='30' onChange={(event)=>{updateCustomer({fname:event.target.value})}}/>
                       </div>
                       <div className="registration-input-group">
                           <p className="input-label">Telefon otce*</p>
                           <input className="registration-input" maxLength='13' onChange={(event)=>{updateCustomer({fphone:event.target.value})}}/>
                       </div>
                {allowNext ? <div className='sign-up-button tc mt20' onClick={() => { handleNext(customerInfo, 2) }}>Dále</div> : <div className='sign-up-button-inactive tc mt20'>Dále</div>}
        </>
    )
}

export default CampRegistrationParents