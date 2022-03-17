import React, { useState, useEffect, useRef } from 'react'
import TeamCard from './TeamCard'
import Loader from '../Loader/Loader';
import { CSSTransition } from 'react-transition-group';
import apiAdress from '../Variables'
import './Team.css'

const Team = () => {
    let cardList = []
    const ref = useRef(null);
    const [teamData, updateTeamData] = useState()   
    const [displayMore, updateDisplayMore] = useState(false)
    const [dislpayMoreButton, updateDisplayButton] = useState(true)

    const getSortedTeam = (data) => {
        const teamList = []
        data.forEach(obj => {
            if (obj.order) {
                teamList.push(obj)
            }
        })

        teamList.sort(function(a, b) { 
            return a.order - b.order;
        })

        data.forEach(obj => {
            if (!obj.order) {
                teamList.push(obj)
            }
        })

        return teamList
    }

    const fetchTeam = async () => {
        const res = await fetch(`${apiAdress}team`)
        if (res.ok) {
            const data = await res.json()       
            updateTeamData(getSortedTeam(data))
        }        
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

        const newCardListDes = []
        const newCardListNoDes = []
        teamData.forEach((memberObj, i) => {
            if (checkCardPreviewList(memberObj) && memberObj.role !== "superstar crew" && memberObj.role !== 'host') {
                if (memberObj.description) {
                    newCardListDes.push(<TeamCard key={i} data={memberObj} />)
                } else {
                    newCardListNoDes.push(<TeamCard key={i} data={memberObj} />)
                }
            }
        })            
           
        return [...newCardListDes, newCardListNoDes]    
        
    }   

    const getPreviewCards = () => {
        const getMaxPreviewLength = () => {
            const width = ref.current.offsetWidth            
            const min3col = 265 * 3 + 40
            const max3col = 265 * 4 + 60            
            if (width >= min3col && width < max3col) return 3
            else return 4
        }

        cardList = []
        
        getMaxPreviewLength()
        teamData.forEach((element, i) => {            
            if ((element.link || element.google_image) && element.description && element.role !== 'superstar crew') {
                if (element.additional === "influencer" || element.additional === "moderator") {
                    cardList.push(<TeamCard key={i} data={element} />)
                }
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

    const getSuperStarCards = () => {
        const starList = []
        teamData.forEach((memberObj, i) => {           
            if (memberObj.role === 'superstar crew') {                
                starList.push(
                    <TeamCard key={i} data={memberObj}/>
                )
            }
        })
        return starList
    }

    const getGuestCards = () => {
        const guestList = []
        teamData.forEach((memberObj, i) => {           
            if (memberObj.role === 'host') {                
                guestList.push(
                    <TeamCard key={i} data={memberObj}/>
                )
            }
        })
        return guestList
    }

    return (
        <div className="team-container">
            <h1 className="home-page-title">NAŠI VEDOUCÍ</h1>
            <div className="team-display" ref={ref}>
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
                : <div className="team-display-loading"><Loader /></div>}
            <h1 className="home-page-title mtres">SUPERSTAR CREW</h1>
            {teamData ?
                <div className="team-display mt20">
                    {getSuperStarCards()}
                </div> 
                : <div className="team-display-loading"><Loader /></div>}
            <h1 className="home-page-title mtres">HOSTÉ</h1>
            {teamData ?
                <div className="team-display mt20">
                    {getGuestCards()}
                </div> : <div className="team-display-loading"><Loader /></div>}
        </div>
    )
}

export default Team