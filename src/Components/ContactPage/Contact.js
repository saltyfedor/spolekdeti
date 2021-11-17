import React, { useState, useEffect } from 'react'
import apiAdress from '../Variables'
import OrgCard from '../Team/OrgCard'
import './Contact.css'

const Contact = () => {
    const [orgData, updateOrgData] = useState()

    const fetchOrg = async () => {
        const res = await fetch(`${apiAdress}org`)
        const data = await res.json()
        updateOrgData(data)
    }

    useEffect(() => { fetchOrg() }, [])

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
        <div className="contact-page-container">
            <h1 className="home-page-title">VEDENÍ</h1>
            <div className="contact-display">
                    {orgData? getOrgCards(orgData) : null}                    
                </div>
            <h1 className="home-page-title mtres">KONTAKTUJTE NÁS</h1>
            <div className="contact-card">
                <h3>Telefon: +420 608 159 466</h3>
                <h3>Email: spolekdeti@seznam.cz</h3>
                <h3>Sídlo společnosti: Praha 10 - Korunní 2569/108 PSČ: 10100</h3>
                <h3>IČO: 11931451</h3>
                <h3>Bankovní spojení: 5949212002/5500</h3>
            </div>
            
        </div>
    )

}

export default Contact