import {newsAPI} from "../api/api";

const CREATE_NEWS = "CREATE_NEWS";
const GET_NEWS = "GET_NEWS";
const GET_CURRENT_NEWS = "GET_CURRENT_NEWS";
const UPDATE_NEWS = "UPDATE_NEWS";
const DELETE_NEWS = "DELETE_NEWS";
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    news: [],
    currentNews: null,
    isFetching: true
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_NEWS:
            return { ...state, news: [...state.news, action.news] };
        case GET_NEWS:
            return { ...state, news: action.news };
        case GET_CURRENT_NEWS:
            return { ...state, currentNews: action.currentNews };
        case UPDATE_NEWS:
            return { ...state, news: state.news.filter(n => (n.id === action.currentNews.id ? action.currentNews : n)) };
        case DELETE_NEWS:
            return { ...state, news: state.news.filter(n => n.id !== action.id) };
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        default:
            return state;
    }
};

const createNewsAC = (news) => ({type: CREATE_NEWS, news});
const getNewsAC = (news) => ({type: GET_NEWS, news});
const getCurrentNewsAC = (currentNews) => ({type: GET_CURRENT_NEWS, currentNews});
const updateNewsAC = (currentNews) => ({type: UPDATE_NEWS, currentNews});
const deleteNewsAC = (id) => ({type: DELETE_NEWS, id});
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export const createNewNews = (news) => async (dispatch) => {
    let response = await newsAPI.postNews(news);
    dispatch(createNewsAC(response.data))
};

export const getNews = () => async (dispatch) => {
    let response = await newsAPI.getNews();
    dispatch(getNewsAC(response.data))
};

export const getCurrentNews = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await newsAPI.getCurrentNews(id);
    dispatch(toggleIsFetching(false));
    dispatch(getCurrentNewsAC(response.data))
};

export const updateNews = (news) => async (dispatch) => {
    let response = await newsAPI.updateNews(news);
    dispatch(updateNewsAC(news))
};

export const deleteNews = (id) => async (dispatch) => {
    let response = await newsAPI.deleteNews(id);
    dispatch(deleteNewsAC(id))
};

export default newsReducer;