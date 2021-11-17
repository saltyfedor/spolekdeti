import React from "react";
import pecka1 from '../../Images/pecka1.jpg'
import pecka2 from '../../Images/pecka2.jpg'
import pecka3 from '../../Images/pecka3.jpg'
import './LocaleGallery.css'

const images = [pecka1, pecka2, pecka3]

const LocaleGallery = () => {

    const getImages = () => {
        const imgList = images.map(img => {
            return (
                <img className="locale-galley-img" alt="obrázek z lokality" src={img} />
            )
        })
        return imgList
    }

    return (
        <div className="locale-galley-wrapper">
            {getImages()}
        </div>
    )
}

export default LocaleGallery