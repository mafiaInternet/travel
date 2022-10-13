import { useState } from "react";
import FooterRight from "./FooterRight";
import FooterLeft from "./FooterLeft";
const Footer = () =>{
  
        
    const [links] = useState({
        pages: [
            { id: 1, name: 'home', route: '/' },
            { id: 2, name: 'about', route: '/about' },
            { id: 3, name: 'contact', route: '/contact' },
        ],
        partners: [
            { id: 1, name: 'booking', route: '/https://www.booking.com/' },
            { id: 2, name: 'trivago', route: '/https://www.trivago.com/' },
            { id: 3, name: 'hostel world', route: 'https://www.hostelworld.com/' },
            { id: 4, name: 'trip advisor', route: 'https://www.tripadvisor.com/' },
        ],
        headings: {
            pages: 'pages',
            partners: 'partners',
            destinations: 'destinations',
        },
    });
  
  
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__contents">
                    <div className="footer__contents__top">
                        <div className="row">
                            <div className="col-12 col-lg-6">
                                <FooterLeft/>
                            </div>
                            <div className="col-12 col-lg-6">
                                <div className="footer__right">
                                <FooterRight />  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__contents__bottom">
                        <p>&copy; copy right travel friends 2021</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;