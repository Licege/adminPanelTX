import React from 'react'
import { CardReview } from '../../common/element/CardReview'

const DisapprovedReviews = ({ reviews, onApprove }) => (
    <div>
        {reviews.map(( review, key ) => <CardReview review={review} onApprove={onApprove} key={key}/>)}
    </div>
)

export default DisapprovedReviews
