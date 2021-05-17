import React,{useState, useEffect} from 'react'

const DateMenu = ({data, updateDateId}) => {
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
        return (
            <div onClick={() => { updateOpen(true) }}>
                {currentDate === null ? <div className="date-selector-child" onClick={() => {updateOpen(true)}}>Vybrat termín...</div> : <div className="date-selector-child">{`${currentDate.date}, ${currentDate.price}, zbývá míst : ${currentDate.freeSlots}`}</div>}
            </div>
        )
    }

    const getOpenMenu = () => {
        const displayList = data.map((date, i) => {
            return <div key={i} onClick={() => { updateCurrentDate(date); updateDateId(date.id);updateOpen(false)}}>
                <p className="date-selector-child">{`${date.date}, ${date.price}, zbývá míst : ${date.freeSlots}`}</p>
            </div>
        });

        return displayList
    }
    
    

    return (
        <div className="date-selector">
            {isOpen === false ? getClosedMenu() : getOpenMenu()}
        </div>
    )
}

export default DateMenu