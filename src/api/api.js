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
    getEmployees() {
        return axios.get(baseUrl + `/employees/`)
            .then(responce => {
                return responce.data;
            });
    }
};