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
            .then(responce => {
                return responce.data;
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
    }
};