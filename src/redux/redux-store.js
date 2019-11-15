import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import employeesReducer from "./employees-reducer";
import thunkMiddleWare from "redux-thunk";

let reducers = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
    employeesPage: employeesReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
