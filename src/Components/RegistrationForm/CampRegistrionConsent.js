import React, {useState} from "react";
import './Registration.css'

const CampRegistrationConsent = ({ handleNext }) => {
    const [allowNext, updateAllowNext] = useState(false)   

    return (
        <>
            <h3 className="registration-section-title">Souhlas se zpracováním osobních údaju</h3>
            <div className="consent-input-group">
                <input type="checkbox" className="checkbox-input" onChange={()=>{ updateAllowNext(!allowNext) }}/>
                <p className="consent-label">Souhlasím se zpracováním osobních údaju v souladu se zákonem č. 101/2000 Sb. o ochraně osobních údajů, <a>plné znění</a>*</p>
            </div>       
            {allowNext ? <div className='sign-up-button tc mt20' onClick={() => { handleNext(null, 1) }}>Dále</div> : <div className='sign-up-button-inactive tc mt20'>Dále</div>}
        </>
    )
}

export default CampRegistrationConsent