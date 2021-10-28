import React, { useState, useEffect } from 'react'
import TeamCard from './TeamCard'
import { CSSTransition } from 'react-transition-group';
import apiAdress from '../Variables'
import './Team.css'

const Team = () => {
    let cardList = []
    const [teamData, updateTeamData] = useState()
    const [displayMore, updateDisplayMore] = useState(false)
    const [dislpayMoreButton, updateDisplayButton] = useState(true)

    const fetchTeam = async () => {
        const res = await fetch(`${apiAdress}team`)
        const data = await res.json()
        updateTeamData(data)
    }

    useEffect(() => { fetchTeam() }, [])

    const getCards = () => {
        const checkCardPreviewList = (obj) => {
            let result = true
            cardList.forEach(cardElement => {                
                if (cardElement.props.data.id === obj.id) {
                    result = false
                }
            })
            return result
        }

        const newCardList = []
        teamData.forEach((memberObj, i) => {
            if (checkCardPreviewList(memberObj)) {
                newCardList.push(<TeamCard key={i} data={memberObj}/>)
            }
        })            
           
        return newCardList    
        
    }

    const getPreviewCards = () => {
        cardList = []
        
        teamData.forEach((element, i) => {            
            if (element.link && element.description && cardList.length < 4) {
                cardList.push(<TeamCard key={i} data={element}/>)
            }
        });        
        
        return (
            <div>
                <div className="team-display">
                {cardList}
                </div>
                {dislpayMoreButton ? <div className="sign-up-button tc mt20" onClick={() => updateDisplayMore(true)}>Zobrazit více</div> : null}
            </div>
        )
    }

    return (
        <div className="team-container">
            <h1 className="home-page-title">NÁŠE VEDOUCÍ</h1>
            <div className="team-display">
                {teamData ? getPreviewCards() : null}
            </div>
            {teamData ?
                <CSSTransition
                    in={displayMore}
                    timeout={300}
                    classNames="more-leads"
                    unmountOnExit
                    onEnter={() => updateDisplayButton(false)}
                >                   
                <div className="team-display mt20">{getCards()}</div>                   
                </CSSTransition>
            : null}
        </div>
    )
}

export default Team