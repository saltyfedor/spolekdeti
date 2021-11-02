import React, { useState, useEffect } from "react";
import moment from "moment";
import apiAdress from "../Variables";

const SocialFeed = () => {
    const [instagramPosts, updateInstagramPosts] = useState()

    const getPosts = async () => {
        const res = await fetch(`${apiAdress}instagram`)
    }

    

    return (
        <div className="social-container">
            
        </div>
    )
    
    
}

export default SocialFeed