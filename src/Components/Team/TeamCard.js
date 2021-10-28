import React from 'react'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {
    const backgroundImage = `${apiAdress}images/team/squared/${data.link}`

    return (
        <div className="team-card-container">
            <div className="member-image" style={{backgroundImage: `url(${backgroundImage})`}}></div> 
            <h3 className=" member-name c-blue">{data.name}</h3>
            <h4 className="member-role">{data.role}</h4>
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