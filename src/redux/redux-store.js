import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./auth-reducer";
import usersReducer from "./users-reducer";
import employeesReducer from "./employees-reducer";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleWare from "redux-thunk";
import vacanciesReducer from "./vacancies-reducer";
import promosReducer from "./promos-reducer";
import contactsReducer from "./contacts-reducer";
import menuReducer from "./menu-reducer";

let reducers = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
    employeesPage: employeesReducer,
    vacanciesPage: vacanciesReducer,
    promosPage: promosReducer,
    contactsPage: contactsReducer,
    menuPage: menuReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
