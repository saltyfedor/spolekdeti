import React, { useState, useEffect } from 'react'
import './Registration.css'

const CampRegistrationChild = ({ handleNext }) => {
    const [allowNext, updateAllowNext] = useState(false)
    const [customerInfo, updateCustomerInfo] = useState(
        {
            insurance: '',
            weight: '',
            allergy: '',
            illness: '',
            medication: '',
            infectionsEncountered: '',
            recentIllness: '',
            handicaps: '',
            other: '',
            canSwim: ''
        }
    )

    const updateCustomer = (newVal) => {        
        const newInfo = { ...customerInfo }
        Object.assign(newInfo, newVal)        
        updateCustomerInfo(newInfo)
    }

    const checkCustomer = () => {
        let allow = true
        for (const prop in customerInfo) {
            if (customerInfo[prop] === '' && [prop] != 'other') {                
                allow = false
                
            }
        }
        updateAllowNext(allow)
    }

    useEffect(checkCustomer, [customerInfo])
    

    return (
        <>
             <h3 className="registration-section-title">Dotazník o zdravotním stavu dítěte (anamnéza)</h3>
                <div >
                        <div className="registration-input-group">
                            <p className="input-label">Zdravotní pojišťovna*</p>
                            <input className="registration-input" maxLength='20' onChange={(event)=>{updateCustomer({insurance:event.target.value})}}/>
                        </div>                        
                        <div className="registration-input-group">
                            <p className="input-label">Váha dítěte v kg*</p>
                            <input className="registration-input" maxLength='5' onChange={(event)=>{updateCustomer({weight:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Trpí dítě nějakou přecitlivělostí, alergií, astmatem apod.? Popište včetně projevů a alergenů.*</p>
                        <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({allergy:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                            <p className="input-label">Má dítě nějakou trvalou závažnou chorobu? (epilepsie, cukrovka apod.)*</p>
                            <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({illness:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Užívá Vaše dítě trvale nebo v době konání tábora nějaké léky? Kolikrát denně, v kolik hodin a v jakém množství?*</p>
                                <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({medication:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Setkalo se dítě v době půl roku před začátkem tábora s nějakou infekční chorobou?*</p>
                                <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({infectionsEncountered:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Bylo dítě v době jednoho měsíce před začátkem tábora nemocné?*</p>
                                <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({recentIllness:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Je dítě schopné pohybové aktivity bez omezení? Pokud ne, jaké je to omezení?*</p>
                                <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({handicaps:event.target.value})}}/>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Umí dítě plavat?*</p>
                                <div className="radio-input" onChange={(event)=>{updateCustomer({canSwim:event.target.value})}}>
                                <input type="radio" value="Dovede" name="gender" /> Ano
                                <input type="radio" value="Nedovede" name="gender" /> Ne
                                </div>
                        </div>
                        <div className="registration-input-group">
                                <p className="input-label">Jiné sdělení (pomočování, různé druhy fóbií nebo strachu, činnosti nebo jídla, kterým se dítě vyhýbá, hyperaktivita, zvýšená náladovost, specifické rady nebo prosby atd.):</p>
                                <textarea className="registration-input" rows={5} maxLength='500' onChange={(event)=>{updateCustomer({other:event.target.value})}}/>
                </div>                
            </div>            
            {allowNext ? <div className='sign-up-button tc mt20' onClick={() => { handleNext(customerInfo, 4) }}>Dále</div> : <div className='sign-up-button-inactive tc mt20'>Dále</div>}
        </>
    )
}

export default CampRegistrationChild