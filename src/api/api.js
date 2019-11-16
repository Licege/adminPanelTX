import * as axios from "axios";

const baseUrl = 'http://localhost:9090/api';
/*
export const usersAPI = {
    getUsers() {
        return axios.get(baseUrl + `/users/`)
            .then(responce => {
                return responce.data;
            });
    }
};*/
export const usersAPI = {
    getUsers(currentPage = 1) {
        return axios.get(baseUrl + `/users/?page=${currentPage}`)
            .then(responce => {
                return responce.data;
            });
    },
    getUserById(id) {
        return axios.get(baseUrl + `/users/${id}`)
            .then(responce => {
                return responce;
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