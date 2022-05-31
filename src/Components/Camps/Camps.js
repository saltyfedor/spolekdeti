import React, { useState, useEffect} from 'react'
import './Camps.css'
import Loader from '../Loader/Loader'
import CampCard from './CampCard'
import useCheckMobileScreen from './useCheckMobileScreen'
import { CSSTransition } from 'react-transition-group'
import apiAdress from '../Variables'

const Camps = ({voucher}) => {
    const [campData, updateData] = useState()
    const [displayAll, updateDisplayAll] = useState(false)
    const [displayMoreButton, updateDisplayButton] = useState(true)
    const mobile = useCheckMobileScreen()    

    const fetchCamps = async () => {
        const data = await fetch(`${apiAdress}camps`, {
          method: 'GET',     
        })    
        
        const res = await data.json()

        const filtered = res.filter(camp => !camp.deleted)

        updateData(filtered)          
    }
    
    useEffect(() => { fetchCamps() }, [])
    
       
    
    const getCampCards = () => {
        const cardList = campData.map(campObj => {
            return (<CampCard key={campObj.id} data={campObj}/>)
        })
        return cardList
    }

    const getMobileCamps = () => {
                
        const cardList = []
        campData.forEach(campObj => {
            if (cardList.length < 2) {
                cardList.push(<CampCard key={campObj.id} data={campObj}/>)
            }
        });        
        return cardList
    }

    const getMoreCamps = (existing) => {
       
        const checkExisting = (campObj) => {            
            let result = true
            existing.forEach(camp => {
                
                if (campObj.id === camp.props.data.id) { result = false }
            })            
            return result
        }

        const cardList = []
        campData.forEach(campObj => {
            if (checkExisting(campObj)) {
                cardList.push(<CampCard key={campObj.id} data={campObj}/>)
            }
        });
        return cardList
    }

    if (campData) {    
        if (!mobile) {
            return (
        
                <div className="camp-section-container" >
                    <h1 className="home-page-title c-blue">TÁBORY</h1>                    
                        <div className="camp-section">
                        {getCampCards()}
                    </div>      
                </div>      
            )
        } else {
            if (campData) {
                const mobileCamps = getMobileCamps()
                return (
                    <div className="camp-section-container" >
                        <h1 className="home-page-title c-blue">TÁBORY</h1>                        
                        <div className="camp-section">
                            {mobileCamps}                                
                            {displayMoreButton ? <div className="sign-up-button tc" onClick={() => { updateDisplayAll(true) }}>Zobrazit víc táborů</div> : null}
                        </div>
                        <CSSTransition
                                    in={displayAll}
                                    timeout={300}
                                    classNames="more-camps"
                                    unmountOnExit
                                    onEnter={() => updateDisplayButton(false)}
                                >
                                    <div className="camp-section mt20">
                                    {getMoreCamps(mobileCamps)}
                                    </div>
                        </CSSTransition>
                    </div>
                )
            }
        }
    } else {
        return (
            <div className="camp-section-container" >
                <h1 className="home-page-title c-blue">TÁBORY</h1>                    
                <div className="camp-section-loading">
                    <Loader />
                </div>      
            </div>  
        )
    } 
 }

export default Camps