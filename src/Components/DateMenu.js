import React,{useState, useEffect} from 'react'
import moment from 'moment'

const DateMenu = ({ data, price, updateDateId }) => {
    
    const [isOpen, updateOpen] = useState(false)
    const [currentDate, updateCurrentDate] = useState(null)
    const checkDateNum = () => {
        const locData = data
        if (locData.length === 1) {
            updateDateId(data[0].id)
            updateCurrentDate(data[0])
        }
    }

    let x;

    useEffect(checkDateNum, [])

    const getClosedMenu = () => {
        if (data.length > 0) {
            return (
                <div onClick={() => { updateOpen(true) }}>
                    {currentDate === null ? <div className="date-selector-child" onClick={() => { updateOpen(true) }}>Vybrat termín...</div> : <div className="date-selector-child">{`od ${moment(currentDate.start).format('DD.MM.YYYY')} do ${moment(currentDate.end).format('DD.MM.YYYY')}`}</div>}
                </div>
            )
        } else {
            return (
                
                    <div className="date-selector-child-inactive">Zatím žádné termíny...</div>
                
            )
        }
    }

    const getOpenMenu = () => {
        const choiceList = []
        data.forEach(turnus => {
            if (turnus.available) {
                choiceList.push (
                    <div key={turnus.id} onClick={() => { updateCurrentDate(turnus); updateDateId(turnus.id); updateOpen(false) }}>
                        <p className="date-selector-child">{`od ${moment(turnus.start).format('DD.MM.YYYY')} do ${moment(turnus.end).format('DD.MM.YYYY')}`}</p>
                    </div>
                )
            } else {
                choiceList.push (
                    <div key={turnus.id}>
                        <p className="date-selector-child-inactive">{`od ${moment(turnus.start).format('DD.MM.YYYY')} do ${moment(turnus.end).format('DD.MM.YYYY')} (Turnus je již plný)`}</p>
                    </div>
                )
            }
        });      

        return choiceList
    }
    
    const getClasses = () => {       
        if(data.length === 0) return 'date-selector-inactive'
    }

    return (
        <div className={`date-selector ${getClasses()}`}>
            {isOpen === false ? getClosedMenu() : getOpenMenu()}
        </div>
    )
}

export default DateMenu