import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import authReducer from './auth-reducer'
import usersReducer from './users-reducer'
import employeesReducer from './reducers/employees.reducer'
import vacanciesReducer from './vacancies-reducer'
import promosReducer from './promos-reducer'
import contactsReducer from './reducers/contacts.reducer'
import menuReducer from './reducers/menu.reducer'
import newsReducer from './news-reducer'
import ordersReducer from './orders-reducer'
import reviewsReducer from './reviews-reducer'
import messageReducer from './message-reducer'
import toggleReducer from './toogle-reducer'
import deliveryReducer from './reducers/delivery.reducer'
import adminReducer from './admin-reducer'
import hallReducer from './hall-reducer'
import fileReducer from './file-reducer'
import averageChecksReducer from './Statistics/average-checks-reducer'
import modalReducer from './reducers/modals.reducer'

const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true
})

export default configureStore({
    middleware,
    reducer: {
        auth: authReducer,
        contactsPage: contactsReducer,
        toggleComponent: toggleReducer,
        newsPage: newsReducer,
        vacanciesPage: vacanciesReducer,
        usersPage: usersReducer,
        employeesPage: employeesReducer,
        file: fileReducer,
        menuPage: menuReducer,
        modal: modalReducer
    }
})
