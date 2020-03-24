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
import newsReducer from "./news-reducer";
import ordersReducer from "./orders-reducer";
import reviewsReducer from "./reviews-reducer";
import messageReducer from "./message-reducer";
import toggleReducer from "./toogle-reducer";
import deliverySettingsReducer from "./delivery-settings-reducer";

let rootReducer = combineReducers({
    auth: authReducer,
    usersPage: usersReducer,
    employeesPage: employeesReducer,
    vacanciesPage: vacanciesReducer,
    promosPage: promosReducer,
    contactsPage: contactsReducer,
    menuPage: menuReducer,
    newsPage: newsReducer,
    ordersPage: ordersReducer,
    reviewsPage: reviewsReducer,
    messagesPage: messageReducer,
    toggleComponent: toggleReducer,
    deliverySettingsPage: deliverySettingsReducer,
    form: formReducer,
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;
