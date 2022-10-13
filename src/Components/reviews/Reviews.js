import { useState, useContext } from "react";
import SharedContext from "../../content/SharedContext";
import ReviewsBody from "./ReviewsBody";

const Reviews = () =>{
    const {sharedData: {reviewsData}} = useContext(SharedContext)
    console.log(reviewsData.length)
    return (
       <div className="reviews">
            <div className="reviews__contents">
                <div className="container">
                    <div className="row">                
                        <ReviewsBody />
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Reviews;