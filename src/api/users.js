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