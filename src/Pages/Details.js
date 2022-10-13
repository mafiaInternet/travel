import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import Header from "../Components/Header"
// import {Helmet } from "react-helmet-async"
import { LazyLoadImage } from "react-lazy-load-image-component"
import DestinationsContext from "../content/DestinationsContext"
import {DETAILS, CITIES} from "../type/DestinationTypes"
import Cities from "../Components/Cities"
import DestinationsInfo from "../Components/destinations/DestinationsInfo"
const Details = (props) =>{
    const{destinationsData,dispath} = useContext(DestinationsContext)
   
    const {id} = useParams()
    const {details, fillteredCities} = destinationsData

    useEffect(()=>{
        dispath({type: DETAILS, payload: id})
        dispath({type: CITIES, payload: id})
        window.scrollTo(0, 0)
    }, [id]);
 
    return <>
    
        <Header heading={details.name} image={details.image}>

        </Header>
        <DestinationsInfo details={details}></DestinationsInfo>
        <Cities cities={fillteredCities} name={details.name}></Cities>
    </>
}

export default Details;