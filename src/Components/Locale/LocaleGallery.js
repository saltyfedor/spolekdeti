import React from "react";
import pecka1 from '../../Images/pecka1.jpg'
import pecka2 from '../../Images/pecka2.jpg'
import pecka3 from '../../Images/pecka3.jpg'
import pecka4 from '../../Images/pecka4.JPG'
import './LocaleGallery.css'

const LocaleGallery = () => {
   
    return (
        <div className="locale-galley-wrapper">           
                <img className="locale-galley-img" alt="obrázek z lokality" src={pecka1} />
                <img className="locale-galley-img" alt="obrázek z lokality" src={pecka2} />            
        </div>
    )
}

export default LocaleGallery