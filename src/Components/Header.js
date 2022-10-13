
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";


const Header = ({heading, pararaph, children, image}) =>{
    const [videos] = useState({
        video: '/assets/video/header.mp4',
        poster: '/assets/video/screen.png',
        logo: '/assets/video/logo.png'
    })

    return (
        <div className="header"> 
            <div className="container">
                <div className="header__logo">
                        <img src={videos.logo}></img>
                    </div>
                <div className="header__video">
                    {image ? (<LazyLoadImage src={image} alt="image"/>
                    ) : ( <video
                        src={videos.video}
                        autoPlay 
                        loop
                        muted 
                        poster={videos.poster}></video>
                    )}
                </div>
                <div className="header__contents">
                    <div className="header__contents__text">
                        <div className="header__contents__text__child">
                            <div className="header__contents__text__child__h1">
                                {heading}
                            </div>
                            <div className="header__contents__text__child__p">
                                {pararaph}
                            </div>
                            <div className="header__contents__text__child__link">
                                {children}
                            </div>
                        </div>
                    </div>
                    


                </div>
            </div>
        </div>
    )
}

export default Header;