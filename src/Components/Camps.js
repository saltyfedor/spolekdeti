import React, { useState, useRef, useLayoutEffect } from 'react'
import CampRow from './CampRow'


const Camps = ({ campData }) => {
    const targetRef = useRef();
    const [currentRow, updateCurrentRow] = useState(0)
    const [contentData, updateContentData] = useState()
    const [showNavArrows, updateShowNav] = useState(true)
    let movement_timer = null;
    const RESET_TIMEOUT = 100;


    const changeWidth = () => {
        
        if (targetRef.current) {
            console.log('cw fired')
            generateContentData(targetRef.current.offsetWidth)
        }
    }

    useLayoutEffect(() => {
        changeWidth(); 
    }, []);  

  

    window.addEventListener('resize', ()=>{
        clearInterval(movement_timer);
        movement_timer = setTimeout(changeWidth, RESET_TIMEOUT);
    });
  

    const generateContentData = (width) => {
        console.log('generate fired w/ ' + width)
       
            const propData = [...campData]
            const newContentData = [];
            const totalCampNumber = campData.length
            const elementsInRow = Math.floor((width - 100) / 300)
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
        
            console.log(newContentData)
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
    

    return (
        
        <div className="camp-section-container" >          
            <h1 className="camp-section-title">TÁBORY</h1>
            <div className="camp-section">
                <div className="camp-preview-wrapper" ref={targetRef}>
                    {contentData ? <CampRow contentData={contentData} current={currentRow} handleArrowClick={handleArrowClick} showNav={showNavArrows}/> : null}
                </div>
            </div>
        </div>
      
    )
 }

export default Camps

