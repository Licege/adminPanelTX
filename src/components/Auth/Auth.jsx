import React from 'react'
import {Field, reduxForm} from "redux-form";
import Button from "react-bootstrap/Button";

const Auth = ({handleSubmit}) => {
    return (
        <div className='auth'>
            <div className='auth-wrapper'>
                <div className='auth-wrapper-title'>Вход в систему</div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name='email'
                               className='form-control mb-3'
                               component='input'
                               placeholder='Введите логин' />
                    </div>
                    <div>
                        <Field name='password'
                               className='form-control mb-3'
                               component='input'
                               placeholder='Введите пароль' />
                    </div>
                    <div className='auth-wrapper-actions'>
                        <Button className='auth-wrapper-actions-btn'
                                variant='primary'
                                type='submit'>
                            Войти
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

let authForm = reduxForm({form: 'auth-form'})(Auth)

export default authForm;