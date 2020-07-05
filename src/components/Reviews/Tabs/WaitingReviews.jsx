import React from 'react'

const WaitingReviews = ({reviews}) => (
    <div>
        {reviews.map(review => (
            <div>{review.description}</div>
        ))}
    </div>
)

export default WaitingReviews
