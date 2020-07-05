import React from 'react'
import {Rating} from "../../common/element/Rating";

const ApprovedReviews = ({reviews}) => (
    <div>
        {reviews.map(review => (
            <div>
                <div>{review.description}</div>
                <Rating value={review.rating} size={20} disabled={true} />
            </div>
        ))}
    </div>
)

export default ApprovedReviews
