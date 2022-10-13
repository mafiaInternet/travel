import reviews from '../../data/reviews'
import {AiFillStar} from 'react-icons/ai'
import { LazyLoadImage } from "react-lazy-load-image-component";
const ReviewsBody = () =>{
    const rating = (numbers) => {
        const stars = [];
        for(let i = 1; i <= numbers; i++){
           stars.push( <AiFillStar color='#FBBF24' size={20}/>)
        }
        return stars;
    }
    return reviews.length > 0 ? reviews.map((review, index) =>(
        <div className="col-12 col-sm-6 col-md-4" key={index}>
           <div className="reviews__body">
                <div className='reviews__body__contents'>
                    <div className="reviews__body__contents__image">
                        <LazyLoadImage src={review.image} />
                    </div>
                    <div className="reviews__body__contents__info">
                        <div className="reviews__body__contents__info__name">{review.name}</div>
                        <div className="reviews__body__contents__info__starts"> {rating(review.stars)}</div>
                        <div className="reviews__body__contents__info__comments">{review.comment}</div>
                    </div>
                </div>
           </div>
        </div>
    )) : ''
       
    
}

export default ReviewsBody;