import React, {useState, useEffect, useRef} from "react";
import './Customers.css'
import apiAdress from "../../../Variables";

const ControlBar = ({ token, onPaymentStatusChange, onFilter }) => {
    const [schema, updateSchema] = useState()
    const filters = useRef({
        capacity_id: false,
        camp_id: false
    })

    const fetchSchema = async () => {
        const res = await fetch(`${apiAdress}admin/schema`, {
            method: 'GET',
            headers: {
            'x-access-token': token
            }
        })
        if (res.ok) {
            const data = await res.json()
            updateSchema(data)
        }
    }
    
    useEffect(fetchSchema, [])

    const handleSelectorChange = (event, type) => {
        let value = event.target.value
        if(value === 'false' || value ==="true") value = JSON.parse(value)
        Object.assign(filters.current, { [type]: value })        
        onFilter(filters.current)        
    }

    const getCampMenu = () => {

        const getOptions = () => {
            const campOptionList = schema.camps.map(campObj => {
                return (<option key={campObj.id} className="camp-selector-option" value={parseInt(campObj.id)}>{campObj.name}</option>)
            })

            campOptionList.unshift(<option key="all" className="camp-selector-option" value={false}>Všechny tábory</option>)

            return campOptionList
        }

        return(
            <select className="camp-selector-menu" onChange={(e) => {handleSelectorChange(e, 'camp_id')}}>
                {getOptions()}
            </select>
        )
    }
    const getCapacityMenu = () => {
        const getOptions = () => {
            const capacityOptionList = schema.capacity.map(capacityObj => {
                return (<option key={capacityObj.id} className="camp-selector-option" value={parseInt(capacityObj.id)}>{`Turnus ${capacityObj.id}.`}</option>)
            })

            capacityOptionList.unshift(<option key="all" className="camp-selector-option" value={false}>Všechny turnusy</option>)

            return capacityOptionList
        }
        
        return(
        <select className="camp-selector-menu" onChange={(e) => {handleSelectorChange(e, 'capacity_id')}}>
            {getOptions()}
        </select>)
    }
    const getBasePaymentsMenu = () => {
        return (
            <select className="camp-selector-menu" onChange={(e) => {onPaymentStatusChange(JSON.parse(e.target.value), 'paid_base')}}>
                <option value={'null'}>Všechny zálohy</option>
                <option value={true}>Zaplacená zálohá</option>
                <option value={false}>Nezaplacená zálohá</option>
            </select>
        )
    }

    
    const getFullPaymentMenu = () => {
        return (
            <select className="camp-selector-menu" onChange={(e) => {onPaymentStatusChange(JSON.parse(e.target.value), 'paid_full')}}>
                <option value={'null'}>Všechny doplatky</option>
                <option value={true}>Zaplacený doplatek</option>
                <option value={false}>Nezaplacený doplatek</option>
            </select>
        )
    }

    return (
        schema ?
            <div className="customers-control-bar">
                {getCampMenu()}
                {getCapacityMenu()}
                {getBasePaymentsMenu()}
                {getFullPaymentMenu()}
            </div > :
            <div className="customers-control-bar">
            </div >
    )
}

export default ControlBar