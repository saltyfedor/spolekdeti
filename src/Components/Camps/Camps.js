import React, { useState, useEffect} from 'react'
import './Camps.css'
import CampsLoading from './CampsLoading'
import CampCard from './CampCard'
import apiAdress from '../Variables'
/*import CampRow from './CampRow'
import CampNav from './CampNav'*/


const Camps = () => {
    const [campData, updateData] = useState()

    const fetchCamps = async () => {
        const res = await fetch(`${apiAdress}camps`, {
          method: 'GET',     
        }).then(res => res.json())
        console.log(res)
        updateData(res)          
    }
    
    useEffect(()=>{fetchCamps()}, [])

    /*


    const changeWidth = () => {
        
        if (targetRef.current) {
            generateContentData(targetRef.current.offsetWidth)
        }
    }

    useLayoutEffect(() => {
        changeWidth(); 
    }, []);
    
    useEffect(() => {
        if (typeof window === 'undefined') return; //specific for gatsby or applications using webpack
        
        changeWidth();
        
        window.addEventListener("resize", handleResize);
        
        handleResize();
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  
    
        const handleResize = () => {
            clearInterval(movement_timer);
            movement_timer = setTimeout(changeWidth, RESET_TIMEOUT);
        }
 
  

    const generateContentData = (width) => {       
       
            const propData = [...campData]
            const newContentData = [];
            const totalCampNumber = campData.length
            const elementsInRow = Math.floor((width - 100) / 250)
        if (elementsInRow > 1) {
            updateShowNav(true)
            const numberOfRows = Math.ceil(totalCampNumber / elementsInRow)
        
            let i = 0;
            let currIndex = 0;

            while (numberOfRows > i) {
                const newRow = [];
                let x = 0;

                while (elementsInRow > x) {
                
                    newRow.push(propData[currIndex])
                    currIndex++;
                    x++;
                }

                newContentData.push(newRow)
                i++;
            }
        
            updateContentData(newContentData)
        } else {
            updateShowNav(false)
            propData.forEach(camp => {
                const newRow = [camp]
                newContentData.push(newRow)
            })            
            updateContentData(newContentData)
        }
         
    }
    
    const handleArrowClick = (modifier, rowNumber) => {
        if (modifier === -1) {
            if (currentRow !== 0) {
                updateCurrentRow(currentRow - 1)
            }
        }
        if (modifier === 1) {
            if (currentRow + 1 < rowNumber) {
                updateCurrentRow(currentRow + 1)
            }
        }
    }
    
    const handleDotClick = (rowNum) => {
        updateCurrentRow(rowNum)
    }*/
    
    const getCampCards = () => {
        const cardList = campData.map(campObj => {
            return (<CampCard key={campObj.id} data={campObj}/>)
        })
        return cardList
    }

    return (
        
        <div  className="camp-section-container" >          
            <h1 className="home-page-title c-blue">TÁBORY</h1>
            
                {campData ?
                    <div className="camp-section">
                        {getCampCards()}
                    </div>
                    : <CampsLoading />}
           
        </div>
      
    )
 }

export default Camps


/*
<div  className="camp-section-container" >          
            <h1 className="home-page-title c-blue">TÁBORY</h1>
            <div className="camp-section">
                <div className="camp-preview-wrapper" ref={targetRef}>
                    {contentData ? <CampRow contentData={contentData} current={currentRow} handleArrowClick={handleArrowClick} showNav={showNavArrows}/> : null}
                </div>
                {contentData ? <CampNav rowNumber={contentData.length} rowCurrent={currentRow} handleDotClick={ handleDotClick}/> : null}
            </div>
        </div>*/

