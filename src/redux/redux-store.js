import {combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import employeesReducer from "./employees-reducer";

let reducers = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
    employeesPage: employeesReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
