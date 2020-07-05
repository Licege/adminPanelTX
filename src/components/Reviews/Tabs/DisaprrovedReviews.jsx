import React from 'react'

const DisapprovedReviews = ({reviews}) => (
    <div>
        {reviews.map(review => (
            <div>{review.description}</div>
        ))}
    </div>
)

export default DisapprovedReviews
