import {reviewsAPI} from "../api/api"

const GET_REVIEWS = "REVIEWS/GET_REVIEWS"
const GET_REVIEW_BY_ID = "REVIEWS/GET_REVIEW_BY_ID"
const APPROVE_REVIEW = "REVIEWS/APPROVE_REVIEW"
const DISAPPROVE_REVIEW = "REVIEWS/DISAPPROVE_REVIEW"
const POST_ANSWER = "REVIEWS/POST_ANSWER"
const DELETE_ANSWER = "REVIEWS/DELETE_ANSWER"

let initialState = {
    reviews: [],
    currentReview: {},
    answer: {}
}

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return { ...state, reviews: action.reviews }
        case GET_REVIEW_BY_ID:
            return { ...state, currentReview: action.review }
        case APPROVE_REVIEW:
            return { ...state, reviews: state.reviews.map(review => review._id === action.id ? {...review, status: 1 } : review) }
        case DISAPPROVE_REVIEW:
            return
        case POST_ANSWER:
            return
        case DELETE_ANSWER:
            return
        default:
            return state
    }
};

const getReviewsAC = (reviews) => ({type: GET_REVIEWS, reviews})
const getReviewByIdAC = (review) => ({type: GET_REVIEW_BY_ID, review})
const approveReviewAC = (review) => ({type: APPROVE_REVIEW, review})

export const requestReviews = () => async (dispatch) => {
    let response = await reviewsAPI.getReviews()
    dispatch(getReviewsAC(response.data))
}

export const requestReview = (id) => async (dispatch) => {
    let response = await reviewsAPI.getReview(id)
    dispatch(getReviewByIdAC(response.data))
}

export const changeReviewStatus = (review) => async (dispatch) => {
    let response = await reviewsAPI.updateReview(review)
    dispatch(approveReviewAC(response.data))
}

export default reviewsReducer