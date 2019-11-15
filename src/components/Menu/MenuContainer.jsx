import React from 'react'
import {usersAPI} from "../../api/api";
import Menu from "./Menu";

class UsersContainer extends React.Component {
    componentDidMount() {
        usersAPI.getUsers().then(data =>{
            console.log(data)
        })
    }

    render() {
        return <Menu />
    }
}

export default UsersContainer;