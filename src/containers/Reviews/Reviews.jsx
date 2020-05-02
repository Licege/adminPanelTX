import React from 'react'
import {connect} from "react-redux";
import {requestReviews} from "../../redux/reviews-reducer";
import Reviews from "../../components/Reviews/Reviews";

class ReviewsContainer extends React.PureComponent {
    componentDidMount() {
        if (!this.props.reviews.length) this.props.getReviews()
    }

    render() {
        return <Reviews reviews={this.props.reviews} />
    }
}

let mapStateToProps = (state) => {
    return {
        reviews: state.reviewsPage.reviews
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getReviews: () => {
            dispatch(requestReviews())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReviewsContainer)