import axios from 'axios'

export const WS_BASE = process.env.NODE_ENV === 'production' ? '//server.tri-xolma.ru/' : `http://localhost:9091/`

export const serverUrl = process.env.NODE_ENV === 'production' ? '//api.tri-xolma.ru/' : `http://localhost:9090/`
const baseUrl = serverUrl + 'api/private'
export const secret = 'dev-jwt'

const apiAdminRequest = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': localStorage.getItem('accessToken'),
    },
})

apiAdminRequest.interceptors.response.use(function ( response ) {
    return response
}, function ( error ) {

    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true

        const refreshToken = window.localStorage.getItem('refreshToken')
        return axios.post(baseUrl + `/auth/refresh-token/`, { refreshToken })
                    .then(( { data } ) => {
                        window.localStorage.setItem('accessToken', data.accessToken)
                        window.localStorage.setItem('refreshToken', data.refreshToken)
                        //apiAdminRequest.defaults.headers.common['Authorization'] = data.accessToken;
                        apiAdminRequest.defaults.headers['Authorization'] = data.accessToken
                        originalRequest.headers['Authorization'] = data.accessToken
                        return apiAdminRequest(originalRequest)
                    })
                    .catch(error => {
                        window.localStorage.clear()
                        window.location.reload()
                    })
    }

    return Promise.reject(error)
})

export const authAPI = {
    login( user ) {
        return axios.post(baseUrl + `/auth/login/`, user)
                    .then(response => {
                        return response
                    })
    },
    registration( user ) {
        return axios.post(baseUrl + `/auth/registration/`, user)
                    .then(response => {
                        return response
                    })
    },
}

export const adminAPI = {
    getAdmins() {
        return apiAdminRequest.get(`/admin/`)
                              .then(response => {
                                  return response
                              })
    },
    postAdmin( id ) {
        return apiAdminRequest.post(`/admin/${id}`)
                              .then(response => {
                                  return response
                              })
    },
}

export const usersAPI = {
    getUsers( currentPage = 1, filters ) {
        return apiAdminRequest.get(`/users/?page=${currentPage}`, { params: filters })
                              .then(response => {
                                  return response
                              })
    },
    getUserById( id ) {
        return apiAdminRequest.get(`/users/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    updateUser( profile ) {
        return apiAdminRequest.patch(`/users/${profile.id}`, profile)
                              .then(response => {
                                  return response
                              })
    },
}

export const employeesAPI = {
    createEmployee( profile ) {
        return apiAdminRequest.post(baseUrl + `/employees/`, profile)
                              .then(response => response)
                              .catch(e => e.response)
    },
    getEmployees() {
        return apiAdminRequest.get(baseUrl + `/employees/`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    getEmployeeById( id ) {
        return apiAdminRequest.get(baseUrl + `/employees/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    updateEmployee( profile ) {
        return apiAdminRequest.put(baseUrl + `/employees/${profile.id}`, profile)
                              .then(response => response)
                              .catch(e => e.response)
    },
    deleteEmployee( id ) {
        return apiAdminRequest.delete(baseUrl + `/employees/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    getProfessions() {
        return apiAdminRequest.get(baseUrl + `/professions/`)
                              .then(response => response)
                              .catch(e => e.response)
    },
}

export const vacancyAPI = {
    getVacancies() {
        return apiAdminRequest.get(baseUrl + `/vacancies/`)
                              .then(response => {
                                  return response
                              })
    },
    getVacancy( id ) {
        return apiAdminRequest.get(baseUrl + `/vacancies/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    createVacancy( vacancy ) {
        return apiAdminRequest.post(`/vacancies/`, vacancy)
                              .then(response => {
                                  return response
                              })
    },
    updateVacancy( vacancy, id ) {
        return apiAdminRequest.patch(`/vacancies/${id}`, vacancy)
                              .then(response => {
                                  return response
                              })
    },
    deleteVacancy( id ) {
        return apiAdminRequest.delete(`/vacancies/${id}`)
                              .then(response => {
                                  return response
                              })
    },
}

export const contactsAPI = {
    getContacts() {
        return apiAdminRequest.get(baseUrl + `/contacts/`)
                              .then(response => {
                                  return response
                              })
    },
    updateContacts( contacts ) {
        return apiAdminRequest.patch(`/contacts/${contacts._id}`, contacts)
                              .then(response => {
                                  return response
                              })
    },
}

export const promoAPI = {
    getPromos() {
        return apiAdminRequest.get(baseUrl + `/promos/`)
                              .then(response => {
                                  return response
                              })
    },
    getPromo( id ) {
        return apiAdminRequest.get(baseUrl + `/promos/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    postPromo( promo ) {
        return apiAdminRequest.post(baseUrl + `/promos/`, promo)
                              .then(response => {
                                  return response
                              })
    },
    updatePromo( promo, id ) {
        return apiAdminRequest.patch(baseUrl + `/promos/${id}`, promo)
                              .then(response => {
                                  return response
                              })
    },
}

export const menuAPI = {
    createDish( dish ) {
        return apiAdminRequest.post(`/menu/`, dish)
                              .then(response => {
                                  return response
                              })
    },
    getDishes() {
        return apiAdminRequest.get(baseUrl + `/menu/`)
                              .then(response => {
                                  return response
                              })
    },
    getDishesByCategory( category ) {
        return apiAdminRequest.get(baseUrl + `/menu/${category}`)
                              .then(response => {
                                  return response
                              })
    },
    getDish( id ) {
        return apiAdminRequest.get(baseUrl + `/menu/dish/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    updateDish( dish, id ) {
        return apiAdminRequest.patch(`/menu/${id}`, dish)
                              .then(response => {
                                  return response
                              })
    },
    deleteDish( id ) {
        return apiAdminRequest.delete(`/menu/${id}`)
                              .then(response => {
                                  return response
                              })
                              .catch(e => console.log(e))
    },
    getCategories() {
        return apiAdminRequest.get(baseUrl + `/categories/`)
                              .then(response => {
                                  return response
                              })
    },
    getCategory( id ) {
        return apiAdminRequest.get(baseUrl + `/categories/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    createCategory( category ) {
        return apiAdminRequest.post(`/categories/`, category)
                              .then(response => {
                                  return response
                              })
    },
    updateCategory( category ) {
        return apiAdminRequest.patch(`/categories/${category._id}`, category)
                              .then(response => {
                                  return response
                              })
    },
    deleteCategory( id ) {
        return apiAdminRequest.delete(`/categories/${id}`)
                              .then(response => {
                                  return response
                              })
    },
}

export const newsAPI = {
    getNews() {
        return apiAdminRequest.get(baseUrl + `/news/`)
                              .then(response => {
                                  return response
                              })
    },
    getCurrentNews( id ) {
        return apiAdminRequest.get(baseUrl + `/news/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    postNews( news ) {
        return apiAdminRequest.post(baseUrl + `/news/`, news)
                              .then(response => {
                                  return response
                              })
    },
    updateNews( news, id ) {
        return apiAdminRequest.patch(baseUrl + `/news/${id}`, news)
                              .then(response => {
                                  return response
                              })
    },
    deleteNews( id ) {
        return apiAdminRequest.delete(baseUrl + `/news/${id}`)
                              .then(response => {
                                  return response
                              })
    },
}

export const ordersAPI = {
    getOrders() {
        return apiAdminRequest.get(`/orders/`)
                              .then(response => {
                                  return response
                              })
    },
}

export const reviewsAPI = {
    getReviews() {
        return apiAdminRequest.get(`/reviews/`)
                              .then(response => {
                                  return response
                              })
    },
    getReview( id ) {
        return apiAdminRequest.get(`/reviews/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    updateReview( review ) {
        return apiAdminRequest.patch(`/reviews/${review._id}`, review)
                              .then(response => {
                                  return response
                              })
    },
}

export const messagesAPI = {
    getMessages() {
        return apiAdminRequest.get(baseUrl + `/messages/`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    getMessage( id ) {
        return apiAdminRequest.get(baseUrl + `/messages/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    deleteMessage( id ) {
        return apiAdminRequest.delete(baseUrl + `/messages/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
}

export const deliveryAPI = {
    getOrders( filter, page ) {
        return apiAdminRequest.get(`/delivery/?offset=${page}`, { params: filter })
                              .then(response => {
                                  return response
                              })
    },
    getOrderById( id ) {
        return apiAdminRequest.get(`/delivery/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    updateOrder( order ) {
        return apiAdminRequest.patch(`/delivery/${order._id}`, order)
                              .then(response => {
                                  return response
                              })
    },
}

export const deliverySettingsAPI = {
    getSettings() {
        return apiAdminRequest.get(baseUrl + `/delivery-settings/common/`)
                              .then(response => {
                                  return response
                              })
    },
    getSettingsById( id ) {
        return apiAdminRequest.get(`/delivery-settings/common/${id}`)
                              .then(response => {
                                  return response
                              })
    },
    updateSettings( settings ) {
        return apiAdminRequest.patch(`/delivery-settings/common/${settings._id}`, settings)
                              .then(response => {
                                  return response
                              })
    },
    createSettings( settings ) {
        return apiAdminRequest.post(`/delivery-settings/common/`, settings)
                              .then(response => {
                                  return response
                              })
    },
    deleteSettings( id ) {
        return apiAdminRequest.delete(`/delivery-settings/common/${id}`)
                              .then(response => {
                                  return response
                              })
    },
}

export const deliveryGlobalSettingsAPI = {
    getSettings() {
        return apiAdminRequest.get(baseUrl + `/delivery-settings/global/`)
                              .then(response => {
                                  return response
                              })
    },
    updateSettings( settings ) {
        return apiAdminRequest.patch(`/delivery-settings/global/${settings._id}`, settings)
                              .then(response => {
                                  return response
                              })
    },
}

export const banquetHallsAPI = {
    getHalls() {
        return apiAdminRequest.get(baseUrl + `/banquet-hall/`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    getHall( id ) {
        return apiAdminRequest.get(baseUrl + `/banquet-hall/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
    createHall( hall ) {
        return apiAdminRequest.get(baseUrl + `/banquet-hall/`, hall)
                              .then(response => response)
                              .catch(e => e.response)
    },
    updateHall( hall ) {
        return apiAdminRequest.patch(`/banquet-hall/${hall._id}`, hall)
                              .then(response => response)
                              .catch(e => e.response)
    },
    deleteHall( id ) {
        return apiAdminRequest.delete(`/banquet-hall/${id}`)
                              .then(response => response)
                              .catch(e => e.response)
    },
}

export const fileAPI = {
    uploadFile( file ) {
        return apiAdminRequest.post(`/file/`, file)
                              .then(response => response)
    },
}

export const averageChecksAPI = {
    getAverageChecks( filter ) {
        return apiAdminRequest.get(`/statistics/average-checks/`, { params: filter })
                              .then(response => response)
    },
}
