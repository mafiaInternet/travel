import { LazyLoadImage } from "react-lazy-load-image-component"
import {BsStopwatch} from "react-icons/bs"
import Facilities from "./Facilities"
const Cities = ({cities, name}) => {
    const fomate = () =>{
        
    }
    return (
        <div className="cities">
            <div className="container">
                <div className="cities__container">
                    <h2 className="heading">cities in {name}</h2>
                    <div className="row">
                        {cities.length > 0 ? cities.map((city) =>(
                            <div className="col-3 p-4" key={city.id}>
                                <div className="cities__body">
                                    <div className="cities__body__image">
                                        <LazyLoadImage src={city.image}/>
                                        <div className = {city.status === 'Bestselling' ? 'bestselling' 
                                                        : city.status === 'New' ? 'new'
                                                        : city.status === 'Hot' ? 'hot' 
                                                        : ''}>
                                            {city.status}
                                        </div>
                                    </div>
                                    <div className="cities__body__contents">
                                        <div className="cities__body__contents__top">
                                            <div className="cities__body__contents__top__name">
                                                {city.name}
                                            </div>
                                            <div className="cities__body__contents__top__duration">
                                                <BsStopwatch size={18} color='#df2186'></BsStopwatch>
                                                <div className="cities__body__contents__top__duration__time">
                                                    {city.duration}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="cities__body__contents__price">
                                            <span className="cities__body__contents__price__dollor">
                                                ${city.price}.00
                                            </span>
                                            <Facilities name="Room" value={city.room}/>
                                            <Facilities name='Food' value={city.food}/>
                                            <div className="cities__body__contents__button">
                                                    <button className="btn btn-dark">Buy now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (`No cities in ${name}`)}
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Cities