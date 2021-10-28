import React, {useState, useRef, useEffect} from 'react'
import apiAdress from '../Variables'

const TeamCard = ({ data }) => {
    const [imageHeight, updateHeight] = useState(215)

    const ref = useRef(null); 
    const backgroundImage = `${apiAdress}images/team/squared/${data.link}`

    useEffect(() => {       

        console.log('width', ref.current ? ref.current.offsetWidth - 50 : 0);
        
        const imgWidth = ref.current.offsetWidth - 50
        updateHeight(imgWidth)
      }, [ref.current]);

    return (
        <div className="team-card-container" ref={ref}>
            <div className="member-image" style={{backgroundImage: `url(${backgroundImage})`, height: `${imageHeight}px`}}></div> 
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