import { useState, useEffect } from "react";
import {BsChevronRight} from 'react-icons/bs'
const FooterRight = () =>{
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
        headings: [
           
            {id: 1, name: 'UK'},
            {id: 2, name: 'USA'},
            {id: 3, name: 'thailand'},
            {id: 4, name: 'spain'},
            {id: 5, name: 'pakistan'},
            {id: 6, name: 'france'},
            {id: 7, name: 'switzerland'},
            {id: 8, name: 'turkey'}
        ],
    });
    
    const loop = ( title) =>{
        const linkLoop = [];
        
            if(title === 'pages'){
                linkLoop.push( links.pages.map((page, index) => (
                     <li key={index}>
                        <a><BsChevronRight/> {page.name} </a>
                     </li>
                ))
                )
                
            }else if(title === 'partners'){
                linkLoop.push( links.partners.map((partner, index) => (
                    <li key={index}>
                       <a><BsChevronRight/> {partner.name}</a>
                    </li>
               ))
               )
            }else if(title === 'headings'){
                linkLoop.push( links.headings.map((heading, index) => (
                    <li key={index}>
                       <a><BsChevronRight/>{heading.name}</a>
                    </li>
               ))
               )
            }
        
        return linkLoop;
    }

    return (
        <div className="footer__contents__top__right">
            <div className="row">
                <div className="col-4">
                    <h4>PAGES</h4>
                    <ul>
                        {loop('pages')}
                    </ul>
                </div>
                <div className="col-4">
                    <h4>PARTNERS</h4>
                    <ul>
                        {loop('partners')}
                    </ul>
                </div>
                <div className="col-4">
                    <h4>DESTINATIONS</h4>
                    <ul>
                        {loop('headings')}
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FooterRight