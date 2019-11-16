import React from "react";
import {NavLink} from "react-router-dom";
import styles from "../../assets/styles/styles";


const User = (props) => {
    return (
            <div>
                <div className='page-header'>
                    <div className='page-header-title'>
                        Редактирование профиля: {props.user.name}
                    </div>
                </div>
                <div className='page-container'>
                    <div className='card'>
                        <div className='card-body'>
                            <div>{props.user.surname}</div>
                            <div>{props.user.name}</div>
                            <div>{props.user.email}</div>
                            <div>{props.user.phone}</div>
                            <div>{props.user.bonus_points}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default User;