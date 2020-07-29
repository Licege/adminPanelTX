import React from 'react'
import { Form } from 'react-bootstrap'

const newVacancy = ( props ) => {
    return (
        <div>
            <Form>
                <input type="file" accept="image/png, image/jpeg, image/svg+xml, image/svg"/>
                <Form.Control type="text" placeholder="Введите название" required/>
                <Form.Control type="text" placeholder="Введите требования через запятую" required/>
                <Form.Control as="textarea" placeholder="Описание вакансии" rows="5" required/>
                <Form.Control type="number" placeholder="от" required/>
                <Form.Control type="number" placeholder="до"/>
            </Form>

        </div>
    )
}

export default newVacancy
