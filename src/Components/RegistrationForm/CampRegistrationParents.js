import React, { useState, useEffect } from 'react'
import './Registration.css'

const CampRegistrationParents = ({ handleNext }) => {
    const [mPhoneClasses, updateMphone] = useState('')
    const [fPhoneClasses, updateFphone] = useState('')
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

    const updateMotherPhone = (value) => {
        const phone = value.mphone
        if (phone.length <= 13) {            
            updateCustomer(value)
            if (phone.length === 9 || phone.length === 13) {
                updateMphone('success-border')
            } else {
                updateMphone('error-border')
            }
        }
    }

    

    const updateFatherPhone = (value) => {
        const phone = value.fphone
        if (phone.length <= 13) {            
            updateCustomer(value)
            if (phone.length === 9 || phone.length === 13) {
                updateFphone('success-border')
            } else {
                updateFphone('error-border')
            }
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
                            <input className={`registration-input ${mPhoneClasses}`} value={customerInfo.mphone} onChange={(event)=>{updateMotherPhone({mphone:event.target.value.toString()})}}/>
                       </div>
                       <div className="registration-input-group">
                           <p className="input-label">Jméno otce*</p>
                           <input className="registration-input" maxLength='30' onChange={(event)=>{updateCustomer({fname:event.target.value})}}/>
                       </div>
                       <div className="registration-input-group">
                           <p className="input-label">Telefon otce*</p>
                            <input className={`registration-input ${fPhoneClasses}`} onChange={(event)=>{updateFatherPhone({fphone:event.target.value.toString()})}}/>
                       </div>
                {allowNext ? <div className='sign-up-button tc mt20' onClick={() => { handleNext(customerInfo, 3) }}>Dále</div> : <div className='sign-up-button-inactive tc mt20'>Dále</div>}
        </>
    )
}

export default CampRegistrationParents