import React, {useState} from 'react'
import fallback from '../../Images/fallback.jpg'
import { CSSTransition } from 'react-transition-group'
import apiAdress from '../Variables'

const OrgCard = ({ data }) => {
    const [showLongDesc, updateShowLong] = useState(false)
    const [showLongButton, updateShowButton] = useState(true)
    
    const backgroundImage = `${apiAdress}images/team/squared/${data.link}`
    
    const getDescription = () => {
        if (data.description_long && data.description_short) {
            return (
                <div>                    
                    <p className="team-card-text m0 mt5">{data.description_short}</p>
                    {showLongButton ? <div className="sign-up-button tc mt10" onClick={() => updateShowLong(true)}>O mně</div> : null}
                    <CSSTransition
                    in={showLongDesc}
                    timeout={300}
                    classNames="long-desc"
                    unmountOnExit
                    onEnter={() => updateShowButton(false)}
                    >                   
                        <p className="team-card-text m0">{data.description_long}</p>                   
                    </CSSTransition>
                </div>
            )
        }
        else {
            if (data.description) {
                return (<p className="team-card-text">{data.description}</p>)
            }
            else return null
        }
    }

    return (
        <div className="team-card-container">
            <div className="member-image-wrapper">
                <img className="member-image" src={backgroundImage} alt="obrazek-vedouciho" onError={(e)=>{e.target.onerror = null; e.target.src=fallback}}/>
            </div>
            <h2 className=" member-name mt25 tc c-blue">{data.name}</h2>
            <h3 className="member-role tc">{data.role}</h3>            
            {getDescription()}
            
        </div>
    )
}

export default OrgCard