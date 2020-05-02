import {ordersAPI, reviewsAPI} from "../api/api";

const GET_REVIEWS = "GET_REVIEWS";
const GET_REVIEW_BY_ID = "GET_REVIEW_BY_ID";
const APPROVE_REVIEW = "APPROVE_REVIEW";
const DISAPPROVE_REVIEW = "DISAPPROVE_REVIEW";
const POST_ANSWER = "POST_ANSWER";
const DELETE_ANSWER = "DELETE_ANSWER";

let initialState = {
    reviews: [],
    currentReview: {},
    answer: {}
};

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEWS:
            return { ...state, reviews: action.reviews };
        case GET_REVIEW_BY_ID:
            return;
        case APPROVE_REVIEW:
            return ;
        case DISAPPROVE_REVIEW:
            return ;
        case POST_ANSWER:
            return ;
        case DELETE_ANSWER:
            return ;
        default:
            return state;
    }
};

const getReviewsAC = (reviews) => ({type: GET_REVIEWS, reviews});
const getReviewByIdAC = (review) => ({type: GET_REVIEW_BY_ID, review});

export const requestReviews = () => async (dispatch) => {
    let response = await reviewsAPI.getReviews()
    dispatch(getReviewsAC(response.data))
}

export const requestReview = (id) => async (dispatch) => {
    let response = await reviewsAPI.getReview(id)
    dispatch(getReviewByIdAC(response.data))
}

export default reviewsReducer;