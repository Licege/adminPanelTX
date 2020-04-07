import * as axios from "axios";

const baseUrl = 'http://localhost:9090/api';
/*
export const usersAPI = {
    getUsers() {
        return axios.get(baseUrl + `/users/`)
            .then(response => {
                return response.data;
            });
    }
};*/
export const usersAPI = {
    getUsers(currentPage = 1) {
        return axios.get(baseUrl + `/users/?page=${currentPage}`)
            .then(response => {
                return response.data;
            });
    },
    getUserById(id) {
        return axios.get(baseUrl + `/users/${id}`)
            .then(response => {
                return response;
            });
    },
    updateUser(profile) {
        return axios.put(baseUrl + `/users/${profile.id}`, profile)
            .then(response => {
                return response;
            });
    }
};

export const employeesAPI = {
    createEmployee(profile) {
        return axios.post(baseUrl + `/employees/`, profile)
            .then(response => {
                return response;
            })
    },
    getEmployees() {
        return axios.get(baseUrl + `/employees/`)
            .then(response => {
                return response.data;
            });
    },
    getEmployeeById(id) {
        return axios.get(baseUrl + `/employees/${id}`)
            .then(response => {
                return response;
            });
    },
    updateEmployee(profile) {
        return axios.put(baseUrl + `/employees/${profile.id}`, profile)
            .then(response => {
                return response;
            });
    },
    deleteEmployee(id) {
        return axios.delete(baseUrl + `/employees/${id}`)
            .then(response => {
                return response;
            });
    },
    getProfessions() {
        return axios.get(baseUrl + `/professions/`)
            .then(response => {
                return response.data;
            });
    }
};

export const vacancyAPI = {
    getVacancies() {
        return axios.get(baseUrl + `/vacancy/`)
            .then(response => {
                return response;
            })
    },
    createVacancy(vacancy) {
        return axios.post(baseUrl + `/vacancy/`, vacancy)
            .then(response => {
                return response;
            });
    },
    deleteVacancy(id) {
        return axios.delete(baseUrl + `/vacancy/${id}`)
            .then(response => {
                return response;
            });
    },
};

export const contactsAPI = {
    getContacts() {
        return axios.get(baseUrl + `/contacts/`)
            .then(response => {
                return response
            });
    },
    updateContacts(contacts) {
        return axios.put(baseUrl + `/contacts/`, contacts)
            .then(response => {
                return response
            });
    }
};

export const menuAPI = {
    createDish(dish) {
        return axios.post(baseUrl + `/menu/`, dish)
            .then(response => {
                return response
            });
    },
    getDishes() {
        return axios.get(baseUrl + `/menu/`)
            .then(response => {
                return response
            });
    },
    getCategories() {
        return axios.get(baseUrl + `/categories/`)
            .then(response => {
                return response
            });
    },
    updateDish(dish) {
        return axios.put(baseUrl + `/menu/${dish.id}`, dish)
            .then(response => {
                return response
            })
    },
    deleteDish(id) {
        return axios.delete(baseUrl + `/menu/${id}`)
            .then(response => {
                return response
            });
    }

};

export const newsAPI = {
    getNews() {
        return axios.get(baseUrl + `/news/`)
            .then(response => {
                return response
            })
    },
    getCurrentNews(id) {
        return axios.get(baseUrl + `/news/${id}`)
            .then(response => {
                return response
            })
    },
    postNews(news) {
        return axios.post(baseUrl + `/news/`, news)
            .then(response => {
                return response
            })
    },
    updateNews(news) {
        return axios.put(baseUrl + `/news/${news.id}`, news)
            .then(response => {
                return response
            })
    },
    deleteNews(id) {
        return axios.delete(baseUrl + `/news/${id}`)
            .then(response => {
                return response
            })
    }
};

export const ordersAPI = {
    getOrders() {
        return axios.get(baseUrl + `/orders/`)
            .then(response => {
                return response;
            })
    }
};

export const reviewsAPI = {
    getReviews() {
        return axios.get(baseUrl + `/reviews/`)
            .then(response => {
                return response
            })
    },
    postAnswer(answer) {
        return axios.post(baseUrl + `/reviews/`, answer)
            .then(response => {
                return response
            })
    },
    approveReview(id) {
        return axios.post(baseUrl + `/reviews/${id}`)
            .then(response => {
                return response
            })
    }
};

export const messagesAPI = {
    getMessages() {
        return axios.get(baseUrl + `/messages/`)
            .then(response => {
                return response
            })
    },
    getMessage(id) {
        return axios.get(baseUrl + `/messages/${id}`)
            .then(response => {
                return response
            })
    },
    deleteMessage(id) {
        return axios.delete(baseUrl + `/messages/${id}`)
            .then(response => {
                return response
            })
    }
};

export const deliveryAPI = {
    getOrders() {
        return axios.get(baseUrl + `/delivery/`)
            .then(response => {
                return response
            })
    }
};

export const deliverySettingsAPI = {
    getSettings() {
        return axios.get(baseUrl + `/delivery/settings/`)
            .then(response => {
                return response
            })
    },
    updateSettings(settings) {
        return axios.put(baseUrl + `/delivery/settings/`, settings)
            .then(response => {
                return response
            })
    },
    createSettings(settings) {
        return axios.post(baseUrl + `/delivery/settings/`, settings)
            .then(response => {
                return response
            })
    },
    deleteSettings(id) {
        return axios.delete(baseUrl + `/delivery/settings/${id}`)
            .then(response => {
                return response
            })
    }
};

export const deliveryGlobalSettingsAPI = {
    getSettings() {
        return axios.get(baseUrl + `/delivery/global-settings/`)
            .then(response => {
                return response
            })
    },
    updateSettings(settings) {
        return axios.put(baseUrl + `/delivery/global-settings/`, settings)
            .then(response => {
                return response
            })
    }
};

export const citiesAPI = {
    getCities() {
        return axios.get(baseUrl + `/cities/`)
            .then(response => {
                return response
            })
    },
    updateCity(city) {
        return axios.put(baseUrl + `/cities/${city.id}`, city)
            .then(response => {
                return response
            })
    }
};

export const fileAPI = {
    postFile(file) {
        return axios.post(baseUrl + `/file/`, file)
            .then(response => {
                return response
            })
    },
    deleteFile(id) {
        return axios.delete(baseUrl + `/file/${id}`)
            .then(respone => {
                return respone
            })
    }
};