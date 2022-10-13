import { useState, useContext } from "react"
import ServicesLeft from "./ServicesLeft"
import ServicesRight from "./ServicesRight"
import SharedContext from "../../content/SharedContext"
const Services = () =>{
    const {sharedData: {servicesData}} = useContext(SharedContext);
    console.log(servicesData)
    const [state] = useState({
        heading: 'Why customers love travel friends? because we provide unique services.',
        subHeading: 'Our aim is to provide provide professional and unique services to customers, and we have provided high quality services to our customers thats why they love travel friendes'
    })
    return (
        <div className="services">
           <div className="services__contents container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <ServicesLeft heading={state.heading} subHeading={state.subHeading}/>
                    </div>
                    <div className="col-12 col-md-6">
                        <ServicesRight/>
                    </div>
                </div>
           </div>
        </div>
    )
}

export default Services