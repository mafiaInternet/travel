import { useState } from "react"
import Footer from "./Footer"

const FooterLeft = () =>{
    const [state] = useState({
        logo: 'assets/footer/logo.png',
        paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit inventore voluptatem ipsam quisquam obcaecati fugiat architecto, assumenda, temporibus officiis maiores non vitae atque corporis blanditiis, aut quae tempora ut commodi!'
    })

    return(
        <div className="footer__contents__top__left">
        <div className="footer__contents__top__left__logo">
            <img src={state.logo}></img>
        </div>
        <div className="footer__contents__top__left__paragraph">
            <p>{state.paragraph}</p>
        </div>
    </div>
    )
}

export default FooterLeft