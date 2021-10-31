import React,{ useState, useEffect} from 'react'
import fallback from '../../Images/fallback.jpg'
import instaIcon from '../../Images/icons/instagram.svg'
import tiktokIcon from '../../Images/icons/tiktok.svg'
import { CSSTransition } from 'react-transition-group'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {   
    const [showDesc, updateShowDesc] = useState(false)
    const [currentClasses, updateCurrentClasses] = useState('')    
    
    const backgroundImage = `${apiAdress}images/team/squared/${data.link}`
    
    const getRole = () => {
        if (data.additional) return `${data.role} / ${data.additional}`
        else return data.role
    }

    const getSocial = () => {
        const iconList = []
        if (data.social) {
            if (data.social.instagram) {
                iconList.push(
                    <a href={`https://www.instagram.com/${data.social.instagram}`}>
                        <img className="social-icon" src={instaIcon} alt="tiktok" />
                    </a>
                )
            }
            if (data.social.tiktok) {
                iconList.push(
                    <a href={`https://www.tiktok.com/${data.social.tiktok}`}>
                        <img className="social-icon" src={tiktokIcon} alt="tiktok" />
                    </a>
                )
            }
            return (
                <div className="social-container">
                    {iconList}
                </div>
            )
        }
        else return null
    }   

    const handleButtonClick = () => {
       updateShowDesc(!showDesc)
    }

    const getButtonText = () => {
        if (!showDesc) return "O MNĚ"
        else return "SKRÝT"
    }

    const getClasses = () => {
        if (showDesc) {
            return 'no-vis'
        }
    }
   

    return (
        <div className={`team-card-container`}>
            <div className={`${showDesc? 'info-wrapper' : ''} team-flex-col`}>
                <div> 
                    <div className="member-image-wrapper">
                        <img className="member-image" src={backgroundImage} alt="obrazek-vedouciho" onError={(e) => { e.target.onerror = null; e.target.src = fallback }} />
                    </div>
                    
                        <h2 className=" member-name tc c-blue mt25">{data.name}</h2>
                        <h3 className="member-role tc">{getRole()}</h3>
                        {data.additional === "influencer" ? getSocial() : null}
                </div> 
                <div className={`team-button tc mt20 ${currentClasses}`} onClick={handleButtonClick}>O MNĚ</div>
            </div>    
            <CSSTransition
                        in={showDesc}
                        timeout={500}
                        classNames="long-desc"
                        unmountOnExit                        
                    >
                    <div className="open-container team-flex-col">
                            <div>
                            <h2 className=" member-name tc c-blue mt0">{data.name}</h2>
                            <p className="team-card-text m0 tc bt-blue">{data.description}</p>
                            </div>
                            <div className="team-button tc mt20" onClick={handleButtonClick}>{getButtonText()}</div>
                        </div>
            </CSSTransition>
            
        </div>
    )
}

export default TeamCard