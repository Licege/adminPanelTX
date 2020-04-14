import axios from "axios";

export const serverUrl = 'http://localhost:9090/'
const baseUrl = serverUrl + 'api'
export const secret = 'dev-jwt'

const apiAdminRequest = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': localStorage.getItem('accessToken')
    }
})

apiAdminRequest.interceptors.response.use(function (response) {
    return response;
}, function (error) {

    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;

        const refreshToken = window.localStorage.getItem('refreshToken');
        return axios.post(baseUrl + `/auth/refresh-token/`, { refreshToken })
            .then(({data}) => {
                window.localStorage.setItem('accessToken', data.accessToken);
                window.localStorage.setItem('refreshToken', data.refreshToken);
                apiAdminRequest.defaults.headers.common['Authorization'] = data.accessToken;
                originalRequest.headers['Authorization'] = data.accessToken;
                return apiAdminRequest(originalRequest);
            });
    }

    return Promise.reject(error);
});

export const authAPI = {
    login(user) {
        return axios.post(baseUrl + `/auth/login/`, user)
            .then(response => {
                return response
            })
    },
    registration(user) {
        return axios.post(baseUrl + `/auth/registration/`, user)
            .then(response => {
                return response
            })
    }
}

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
        return apiAdminRequest.patch(`/contacts/${contacts._id}`, contacts)
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
    getDish(id) {
        return axios.get(baseUrl + `/menu/${id}`)
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
    updateDish(dish, id) {
        console.log(dish);
        return axios.patch(baseUrl + `/menu/${id}`, dish)
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
    updateNews(news, id) {
        return axios.patch(baseUrl + `/news/${id}`, news)
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