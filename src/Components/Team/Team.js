import React, { useState, useEffect, useRef } from 'react'
import TeamCard from './TeamCard'
import OrgCard from './OrgCard';
import { CSSTransition } from 'react-transition-group';
import apiAdress from '../Variables'
import './Team.css'

const Team = () => {
    let cardList = []
    const ref = useRef(null);
    const [teamData, updateTeamData] = useState()
    const [orgData, updateOrgData] = useState()
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
        const data = await res.json()       
        
        updateTeamData(getSortedTeam(data))
    }
    const fetchOrg = async () => {
        const res = await fetch(`${apiAdress}org`)
        const data = await res.json()
        updateOrgData(data)
    }

    useEffect(() => { fetchTeam() }, [])
    useEffect(() => { fetchOrg() }, [])

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
            if (checkCardPreviewList(memberObj) && memberObj.link) {
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
            if (element.link && element.description && element.additional === "influencer" && cardList.length < getMaxPreviewLength()) {
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

    const compare = ( a, b ) => {
        if ( a.id < b.id ){
          return -1;
        }
        if ( a.id > b.id ){
          return 1;
        }
        return 0;
      }

    const getOrgCards = () => {
        const newOrgList = [...orgData].sort(compare)
        const orgList = newOrgList.map(orgObj => {
            return (<OrgCard key={orgObj.id} data={orgObj}/>)
        })
        return orgList
    }

    return (
        <div className="team-container">
            <h1 className="home-page-title">NAŠE VEDOUCÍ</h1>
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
                : null}
            <h1 className="home-page-title mtres">VEDENÍ</h1>
            {orgData ?
                <div className="team-display">
                    {getOrgCards(orgData)}                    
                </div>
            : null}
        </div>
    )
}

export default Team