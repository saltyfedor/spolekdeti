import React, { useState } from 'react'
import apiAdress from './Variables'
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
const CampRegistration = () => {
    const location = useLocation()
    const { campId, dateId } = location.state
    const [customerInfo, updateCustomerInfo] = useState({
        full_name: '',
        birthday: '',
        birthNumber: '',
        adress: '',
        mname: '',
        fname: '',
        mphone: '',
        fphone: '',
        cemail: '',
    })
    const [childInfo, updateChildInfo] = useState({        
        insurance: '',
        weight: '',
        allergy: '',
        illness: '',
        medication: '',
        infectionsEncountered: '',
        recentIllness: '',
        handicaps: '',
        other: '',
        canSwim: 'ano'
    })


    const updateCustomer = (newVal) => {
        const newInfo = { ...customerInfo }
        Object.assign(newInfo, newVal)
        
        updateCustomerInfo(newInfo)
    }

    const updateInfo = (newVal) => {
        const newInfo = { ...childInfo }
        Object.assign(newInfo, newVal)
        updateChildInfo(newInfo)
    }

    const checkCustomer = () => {
        for (const prop in customerInfo) {
            if (customerInfo[prop] === '') {              
                return false
            }
        }
       return true
    }

    const checkChild = () => {
        for (const prop in childInfo) {
            if (childInfo[prop] === '') {
                return false
            }
        }
        return true
    }

    const putNewCustomer = () => {
        console.log('put fired')
        fetch(`${apiAdress}newcustomer`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },           
            body: JSON.stringify(
                {
                    campId: campId,
                    dateId: dateId,
                    cname: customerInfo.full_name,
                    cbday: customerInfo.birthday,
                    cbnum: customerInfo.birthNumber,
                    cadress: customerInfo.adress,
                    mname: customerInfo.mname,
                    fname: customerInfo.fname,
                    mphone: customerInfo.mphone,
                    fphone: customerInfo.fphone,
                    cemail: customerInfo.cemail,
                    kid_info: childInfo
                }
            )
        })
        .then(res => res.json())
        .then(data=> console.log(data))
    }

    const addCustomer = () => {        
        if (checkChild() && checkCustomer()) {
            putNewCustomer()
        } 
    }
  
    return (
        <div className="registration-outer">
            <div className="registration-inner">
                <h1 className="registration-title">Přihláška</h1>
                             
                <div className="input-section-container">
                    <div className="input-subsection-container">
                    <h3 className="registration-section-title">Kontaktní údaje</h3> 
                        <div className="registration-input-group">
                        <p className="input-label">Email*</p>
                        <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({cemail:event.target.value})}}/>
                        </div>
                        <h3 className="registration-section-title">Účastník tábora</h3>
                        <div className="registration-input-group mr10-r">
                            <p className="input-label">Jméno a příjmení*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({full_name:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Datum narození*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({birthday:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Rodné číslo*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({birthNumber:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Bydliště*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({adress:event.target.value})}}/>
                         </div>
                    </div>
                    <div className="input-subsection-container ml10-r">
                        <h3 className="registration-section-title">Rodiče(zákonní zástupci)</h3>
                        <div className="registration-input-group">
                            <p className="input-label">Jméno matky*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({mname:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Telefon matky*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({mphone:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Jméno otce*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({fname:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Telefon otce*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateCustomer({fphone:event.target.value})}}/>
                        </div>
                    </div>
                </div>
                <h3 className="registration-section-title">Dotazník o zdravotním stavu dítěte (anamnéza)</h3>
                <div >
                        <div className="registration-input-group">
                            <p className="input-label">Zdravotní pojišťovna*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateInfo({insurance:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Váha dítěte*</p>
                            <input className="registration-input" maxLength='50' onChange={(event)=>{updateInfo({weight:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Trpí dítě nějakou přecitlivělostí, alergií, astmatem apod.? Popište včetně projevů a alergenů.*</p>
                        <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateInfo({allergy:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Má dítě nějakou trvalou závažnou chorobu? (epilepsie, cukrovka apod.)*</p>
                            <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({illness:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Užívá Vaše dítě trvale nebo v době konání tábora nějaké léky? Kolikrát denně, v kolik hodin a v jakém množství?*</p>
                                <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({medication:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Setkalo se dítě v době půl roku před začátkem tábora s nějakou infekční chorobou?*</p>
                                <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({infectionsEncountered:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Bylo dítě v době jednoho měsíce před začátkem tábora nemocné?*</p>
                                <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({recentIllness:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Je dítě schopné pohybové aktivity bez omezení? Pokud ne, jaké je to omezení?*</p>
                                <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({handicaps:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Jiné sdělení (pomočování, různé druhy fóbií nebo strachu, činnosti nebo jídla, kterým se dítě vyhýbá, hyperaktivita, zvýšená náladovost, specifické rady nebo prosby atd.):*</p>
                                <textarea className="registration-input" rows={5} maxLength='50' onChange={(event)=>{updateInfo({other:event.target.value})}}/>
                        </div>                        
                </div>
                <Link to={`/success`} style={{ textDecoration: 'none' }}><div className='sign-up-button tc mt20' onClick= {() =>{addCustomer()}}>Rezervovat</div></Link>
            </div>
        </div>
    )
}

export default CampRegistration