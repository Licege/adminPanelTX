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
    deleteDish(id) {
        return axios.delete(baseUrl + `/menu/${id}`)
            .then(response => {
                return response
            });
    }

};