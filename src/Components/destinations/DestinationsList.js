import {FaMapMarkerAlt} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const DestinationsList = ({destination}) => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-xl-3 p-4">
            <div className="destinations__card">
                <div className="destinations__card__img">
                    <img src={destination.image}></img>
                </div>
                <div className="destinations__card__layer">
                    <div className="destinations__card__layer__content">
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <div className='destinations__card__layer__content__country'>
                            {destination.name}
                        </div>
                    </div>
                </div>
                <div className='destinations__card__info'>
                    <div className='destinations__card__info__text'>
                        <Link className='btn-white' to={`/details/${destination.id}`}>Explore</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationsList