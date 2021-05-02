import request from '../lib/request'

const hostname = window.location.hostname
export const WS_BASE = process.env.NODE_ENV === 'production' ? '//server.tri-xolma.ru/' : `http://${hostname}:9091/`

export const serverUrl = process.env.NODE_ENV === 'production' ? '//api.tri-xolma.ru/' : `http://${hostname}:9090/`
const authUrl = process.env.NODE_ENV === 'production' ? '//auth.tri-xolma.ru/auth' : `http://${hostname}:9092/api/auth`
const baseUrl = serverUrl + 'api/private'
export const secret = 'dev-jwt'

export const authAPI = {
    login( user ) {
      return request.post(`${authUrl}/login/`, user)
        .then(response => response)
        .catch(reason => console.error(reason))
    },
    registration( user ) {
      return request.post(`${authUrl}/registration/`, user)
        .then(response => response)
        .catch(reason => console.error(reason))
    },
}

export const adminAPI = {
    getAdmins() {
        return request.get(`${baseUrl}/admin/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    postAdmin( id ) {
        return request.post(`${baseUrl}/admin/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const usersAPI = {
    getUsers( currentPage = 1, filters ) {
        return request.get(`${baseUrl}/users/?page=${currentPage}`, { params: filters })
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getUserById( id ) {
        return request.get(`${baseUrl}/users/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateUser( profile ) {
        return request.patch(`${baseUrl}/users/${profile.id}`, profile)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const employeesAPI = {
    createEmployee( profile ) {
        return request.post(`${baseUrl}/employees/`, profile)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getEmployees() {
        return request.get(`${baseUrl}/employees/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getEmployeeById( id ) {
        return request.get(`${baseUrl}/employees/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateEmployee( profile ) {
        return request.put(`${baseUrl}/employees/${profile.id}`, profile)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteEmployee( id ) {
        return request.delete(`${baseUrl}/employees/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getProfessions() {
        return request.get(`${baseUrl}/professions/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const vacancyAPI = {
    getVacancies() {
        return request.get(`${baseUrl}/vacancies/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getVacancy( id ) {
        return request.get(`${baseUrl}/vacancies/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    createVacancy( vacancy ) {
        return request.post(`${baseUrl}/vacancies/`, vacancy)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateVacancy( vacancy, id ) {
        return request.patch(`${baseUrl}/vacancies/${id}`, vacancy)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteVacancy( id ) {
        return request.delete(`${baseUrl}/vacancies/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const contactsAPI = {
    getContacts() {
        return request.get(`${baseUrl}/contacts/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateContacts( contacts ) {
        return request.patch(`${baseUrl}/contacts/${contacts.id}`, contacts)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const promoAPI = {
    getPromos() {
        return request.get(`${baseUrl}/promos/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getPromo( id ) {
        return request.get(`${baseUrl}/promos/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    postPromo( promo ) {
        return request.post(`${baseUrl}/promos/`, promo)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updatePromo( promo, id ) {
        return request.patch(`${baseUrl}/promos/${id}`, promo)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const menuAPI = {
    createDish( dish ) {
        return request.post(`${baseUrl}/menu/`, dish)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getDishes() {
        return request.get(`${baseUrl}/menu/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getDishesByCategory( category ) {
        return request.get(`${baseUrl}/menu/${category}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getDish( id ) {
        return request.get(`${baseUrl}/menu/dish/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateDish( dish, id ) {
        return request.patch(`${baseUrl}/menu/${id}`, dish)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteDish( id ) {
        return request.delete(`${baseUrl}/menu/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getCategories() {
        return request.get(`${baseUrl}/categories/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getCategory( id ) {
        return request.get(`${baseUrl}/categories/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    createCategory( category ) {
        return request.post(`${baseUrl}/categories/`, category)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateCategory( category ) {
        return request.patch(`${baseUrl}/categories/${category.id}`, category)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteCategory( id ) {
        return request.delete(`${baseUrl}/categories/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const newsAPI = {
    getNews() {
        return request.get(`${baseUrl}/news/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getCurrentNews( id ) {
        return request.get(`${baseUrl}/news/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    postNews( news ) {
        return request.post(`${baseUrl}/news/`, news)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateNews( news, id ) {
        return request.patch(`${baseUrl}/news/${id}`, news)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteNews( id ) {
        return request.delete(`${baseUrl}/news/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const ordersAPI = {
    getOrders() {
        return request.get(`${baseUrl}/orders/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const reviewsAPI = {
    getReviews() {
        return request.get(`${baseUrl}/reviews/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getReview( id ) {
        return request.get(`${baseUrl}/reviews/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateReview( review ) {
        return request.patch(`${baseUrl}/reviews/${review.id}`, review)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const messagesAPI = {
    getMessages() {
        return request.get(`${baseUrl}/messages/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getMessage( id ) {
        return request.get(`${baseUrl}/messages/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteMessage( id ) {
        return request.delete(`${baseUrl}/messages/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const deliveryAPI = {
    getOrders( filter, page ) {
        return request.get(`${baseUrl}/delivery/?offset=${page}`, { params: filter })
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getOrderById( id ) {
        return request.get(`${baseUrl}/delivery/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateOrder( order ) {
        return request.patch(`${baseUrl}/delivery/${order.id}`, order)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const deliverySettingsAPI = {
    getSettings() {
        return request.get(`${baseUrl}/delivery-settings/common/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getSettingsById( id ) {
        return request.get(`${baseUrl}/delivery-settings/common/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateSettings( settings ) {
        return request.patch(`${baseUrl}/delivery-settings/common/${settings.id}`, settings)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    createSettings( settings ) {
        return request.post(`${baseUrl}/delivery-settings/common/`, settings)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteSettings( id ) {
        return request.delete(`${baseUrl}/delivery-settings/common/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const deliveryGlobalSettingsAPI = {
    getSettings() {
        return request.get(`${baseUrl}/delivery-settings/global/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateSettings( settings ) {
        return request.patch(`${baseUrl}/delivery-settings/global/${settings.id}`, settings)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const banquetHallsAPI = {
    getHalls() {
        return request.get(`${baseUrl}/banquet-hall/`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    getHall( id ) {
        return request.get(`${baseUrl}/banquet-hall/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    createHall( hall ) {
        return request.get(`${baseUrl}/banquet-hall/`, hall)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    updateHall( hall ) {
        return request.patch(`${baseUrl}/banquet-hall/${hall.id}`, hall)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
    deleteHall( id ) {
        return request.delete(`${baseUrl}/banquet-hall/${id}`)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const fileAPI = {
    uploadFile( file ) {
        return request.post(`${baseUrl}/file/`, file)
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}

export const averageChecksAPI = {
    getAverageChecks( filter ) {
        return request.get(`${baseUrl}/statistics/average-checks/`, { params: filter })
          .then(response => response)
          .catch(reason => console.error(reason))
    },
}
