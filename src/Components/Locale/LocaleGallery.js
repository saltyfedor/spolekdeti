import React from "react";
import image1 from '../../Images/locale/DSC_0094.JPG'
import image2 from '../../Images/locale/image4.jpeg'
import image3 from '../../Images/locale/pool.jpg'
import './LocaleGallery.css'

const LocaleGallery = () => {
    return (
        <div className="locale-gallery">
            <img className="locale-image" src={image1} alt="chatky" />
            <img className="locale-image" src={image2} alt="deti" />
            <img className="locale-image" src={image3} alt="bazen"/>
        </div>
    )
}

export default LocaleGallery