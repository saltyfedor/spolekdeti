import React from 'react'
import fallback from '../../Images/fallback.jpg'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {
    
    const backgroundImage = `${apiAdress}images/team/squared/${data.link}`  

    return (
        <div className="team-card-container">
            <div className="member-image-wrapper">
                <img className="member-image" src={backgroundImage} alt="obrazek-vedouciho" onError={(e)=>{e.target.onerror = null; e.target.src=fallback}}/>
            </div>
            <h2 className=" member-name c-blue mt25">{data.name}</h2>
            <h3 className="member-role">{data.role}</h3>
            <p className="team-card-text">
                {
                data.description? data.description
                : null
                }
            </p>
        </div>
    )
}

export default TeamCard