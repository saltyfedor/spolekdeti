import React, {useEffect} from "react";
import './Social.css'

const FacebookFeed = () => { 
    
    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse()
        }
    })
    
    return (
        <div className="social-feed-container">                       
            <div class="fb-page" data-href="https://www.facebook.com/agenturaspolekdeti" data-tabs="timeline, events, messages" data-width="" data-height="400px" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
                <blockquote cite="https://www.facebook.com/agenturaspolekdeti" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/agenturaspolekdeti">Spolek dětí</a></blockquote>
            </div>
        </div>
    )    
}

export default FacebookFeed