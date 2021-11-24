import React, { useState, useEffect } from 'react'
import './Registration.css'
let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const CampRegistrationContact = ({ handleNext }) => {
    const [allowNext, updateAllowNext] = useState(false)
    const [emailClasses, updateEmailClasses] = useState('')
    const [customerInfo, updateCustomerInfo] = useState(
        {
            full_name: '',
            birthday: '',
            birthNumberLong: '',
            birthNumberShort: '',
            adress: '',            
            cemail: '',
        }
    )

    const updateCustomer = (newVal) => {
        const newInfo = { ...customerInfo }
        Object.assign(newInfo, newVal)        
        updateCustomerInfo(newInfo)
    }

    const checkCustomer = () => {
        
        const checkBirthNum = () => {
            if (customerInfo.birthNumberLong.length === 6 && customerInfo.birthNumberShort.length === 4) return true
            else return false
        }

        if ( re.test(customerInfo.cemail) && customerInfo.full_name.length > 0 && checkBirthNum() && customerInfo.birthday && customerInfo.adress.length > 0) {
            updateAllowNext(true)
        }
        else {
            updateAllowNext(false)
        }       
        
    }

    const updateEmail = (value) => {
        if (re.test(value.cemail)) {
            updateCustomer(value)
            updateEmailClasses('success-border')
        } else {
            updateCustomer(value)
            updateEmailClasses('error-border')
        }
    }
    
  

    useEffect(checkCustomer, [customerInfo])

    return (
        <>
            <h3 className="registration-section-title">Kontaktní údaje</h3> 
                <div className="registration-input-group">
                    <p className="input-label">Email*</p>
                <input className={`registration-input ${emailClasses}`} type="email" maxLength='50' onChange={(event)=>{updateEmail({cemail:event.target.value})}}/>
                </div>
            <h3 className="registration-section-title">Účastník tábora</h3>
                <div className="registration-input-group">
                    <p className="input-label">Jméno a příjmení*</p>
                    <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({full_name:event.target.value})}}/>
                </div>
                <div className="registration-input-group">
                    <p className="input-label">Datum narození*</p>
                    <input className="registration-input" maxLength='50'type="date" onChange={(event)=>{updateCustomer({birthday:event.target.value})}}/>
                </div>
                <div className="registration-input-group">
                <p className="input-label">Rodné číslo*</p>
                    <div className="birth-number-input-container">
                    <input className="registration-input birth-long" maxLength='6' onChange={(event) => { updateCustomer({ birthNumberLong: event.target.value }) }} /> /
                    <input className="registration-input birth-short" maxLength='4' onChange={(event) => { updateCustomer({ birthNumberShort: event.target.value }) }} />
                    </div>
                </div>
                <div className="registration-input-group">
                    <p className="input-label">Bydliště*</p>
                    <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({adress:event.target.value})}}/>
                </div>
                {allowNext ? <div className='sign-up-button tc mt20' onClick={() => { handleNext(customerInfo, 2) }}>Dále</div> : <div className='sign-up-button-inactive tc mt20'>Dále</div>}
        </>
    )
}

export default CampRegistrationContact