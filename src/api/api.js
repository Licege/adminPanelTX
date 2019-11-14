import * as axios from "axios";

const baseUrl = 'http://localhost:9090/api';

export const usersAPI = {
    getUsers() {
        return axios.get(baseUrl + `/users/`)
            .then(responce => {
                return responce.data;
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