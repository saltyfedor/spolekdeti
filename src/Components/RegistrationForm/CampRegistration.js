import React, { useState} from 'react'
import CampRegistrationContact from './CampRegistrationContact';
import CampRegistrationParents from './CampRegistrationParents';
import CampRegistrationChild from './CampRegistrationChild';
import apiAdress from '../Variables'
import { useLocation, useHistory } from "react-router-dom";
const CampRegistration = () => {
    const history = useHistory()
    const location = useLocation()
    const { campId, dateId } = location.state
    const [currentSection, updateCurrentSection] = useState(0) 
    const [customerInfo, updateCustomerInfo] = useState({        
        other: ''
    })     

    const putNewCustomer = (childInfo) => {
        
        fetch(`${apiAdress}newcustomer`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },           
            body: JSON.stringify(
                {
                    campId: campId,
                    dateId: dateId,
                    cname: customerInfo.full_name,
                    cbday: customerInfo.birthday,
                    cbnum: `${customerInfo.birthNumberLong}/${customerInfo.birthNumberShort}`,
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
            .then(res => {
                if (res.ok) {
                    history.push("/success");
                } else {
                    history.push("/error");
            }
        })        
    }   

    const getCurrentSection = () => {
        if (currentSection === 0) return <CampRegistrationContact handleNext={handleNextClick} />
        if (currentSection === 1) return <CampRegistrationParents handleNext={handleNextClick} />
        if (currentSection === 2) return <CampRegistrationChild handleNext={handleNextClick}/>
    }

    const handleNextClick = (data, next) => {
        if (next !== 3) {
            const newData = Object.assign({}, customerInfo, data)
            updateCustomerInfo(newData)
            updateCurrentSection(next)
        } else {            
            putNewCustomer(data)
        }
    }
  
    return (
        <div className="registration-outer">
            
            <div className="registration-inner-formpage">
                <h1 className="registration-title">Přihláška</h1>
                {getCurrentSection()}
            </div>
        </div>
    )
}

export default CampRegistration