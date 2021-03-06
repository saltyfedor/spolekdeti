import React,{ useState, useEffect} from 'react'
import fallback from '../../Images/fallback.jpg'
import instaIcon from '../../Images/icons/instagram.svg'
import tiktokIcon from '../../Images/icons/tiktok.svg'
import { CSSTransition } from 'react-transition-group'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {   
    const [showDesc, updateShowDesc] = useState(false)     
    
    const backgroundImage = data.google_image ? data.google_image : `${apiAdress}images/team/squared/${data.link}`
        
        
    
    const getRole = () => {
        if (data.additional === "influencer") return `${data.role} / ${data.additional}`
        else return data.role
    }

    const getSocial = () => {
        const iconList = []
        if (data.social) {
            if (data.social.instagram) {
                iconList.push(
                    <a href={`https://www.instagram.com/${data.social.instagram}`} target="_blank" rel="noopener noreferrer">
                        <img className="social-icon" src={instaIcon} alt="tiktok" />
                    </a>
                )
            }
            if (data.social.tiktok) {
                iconList.push(
                    <a href={`https://www.tiktok.com/${data.social.tiktok}`} target="_blank" rel="noopener noreferrer">
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
   
    const getMinHeight = () => {
        if (data.social) return '426px'
        else return '360px'
    }

    return (
        <div className={`team-card-container`} style={{minHeight: getMinHeight()}}>
            <div className={`${showDesc? 'info-wrapper' : ''} team-flex-col`}>
                <div> 
                    <div className="member-image-wrapper">
                        <img className="member-image" src={backgroundImage} alt="obrazek-vedouciho" onError={(e) => { e.target.onerror = null; e.target.src = fallback }} />
                    </div>
                    
                        <h2 className=" member-name tc c-blue mt25">{data.name}</h2>
                        <h3 className="member-role tc">{getRole()}</h3>
                        {data.additional === "influencer" || data.role === "host"? getSocial() : null}
                </div> 
                <div className={`team-button tc mt20`} onClick={handleButtonClick}>O MNĚ</div>
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
                        <p className={data.additional === "influencer" || data.role === "host"? "team-card-text m0 tc bt-blue team-text-social" : "team-card-text m0 tc bt-blue team-text-no-social"}>{data.description}</p>
                            </div>
                            <div className="team-button tc mt20" onClick={handleButtonClick}>{getButtonText()}</div>
                    </div>
            </CSSTransition>
            
        </div>
    )
}

export default TeamCard