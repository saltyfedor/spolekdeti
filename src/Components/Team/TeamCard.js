import React,{ useState} from 'react'
import fallback from '../../Images/fallback.jpg'
import instaIcon from '../../Images/icons/instagram.svg'
import tiktokIcon from '../../Images/icons/tiktok.svg'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {   
    
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

    return (
        <div className="team-card-container">
            <div className="member-image-wrapper">
                <img className="member-image" src={backgroundImage} alt="obrazek-vedouciho" onError={(e)=>{e.target.onerror = null; e.target.src=fallback}}/>
            </div>
            <h2 className=" member-name tc c-blue mt25">{data.name}</h2>
            <h3 className="member-role tc">{getRole()}</h3>
            {data.additional === "influencer" ? getSocial() : null}                            
            <p className="team-card-text m0 tc mt10">{data.description}</p>           
        </div>
    )
}

export default TeamCard