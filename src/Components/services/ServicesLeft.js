import { useState } from "react";
const ServicesLeft = ({heading, subHeading}) =>{
   
   
    return (
        <div className="services__contents__left row">
            <h1 className="services__contents__left__heading col-12">{heading}</h1>
            <p className="services__contents__left__subHeading col-12">{subHeading}</p>
            
        </div>
    )
}

export default ServicesLeft