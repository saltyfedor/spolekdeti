import React,{useState, useEffect} from 'react'

const DateMenu = ({ data, updateDateId }) => {
    
    const [isOpen, updateOpen] = useState(false)
    const [currentDate, updateCurrentDate] = useState(null)
    const checkDateNum = () => {
        const locData = data
        if (locData.length === 1) {
            updateDateId(data[0].id)
            updateCurrentDate(data[0])
        }
    }

    useEffect(checkDateNum, [])

    const getClosedMenu = () => {
        if (data.length > 0) {
            return (
                <div onClick={() => { updateOpen(true) }}>
                    {currentDate === null ? <div className="date-selector-child" onClick={() => { updateOpen(true) }}>Vybrat termín...</div> : <div className="date-selector-child">{`${currentDate.date}, ${currentDate.price}`}</div>}
                </div>
            )
        } else {
            return (
                
                    <div className="date-selector-child-inactive">Zatím žádné termíny...</div>
                
            )
        }
    }

    const getOpenMenu = () => {
        const displayList = data.map((date, i) => {
            return <div key={i} onClick={() => { updateCurrentDate(date); updateDateId(date.id);updateOpen(false)}}>
                <p className="date-selector-child">{`${date.date}, ${date.price}`}</p>
            </div>
        });

        return displayList
    }
    
    const getClasses = () => {
        console.log(data.length)
        if(data.length === 0) return 'date-selector-inactive'
    }

    return (
        <div className={`date-selector ${getClasses()}`}>
            {isOpen === false ? getClosedMenu() : getOpenMenu()}
        </div>
    )
}

export default DateMenu