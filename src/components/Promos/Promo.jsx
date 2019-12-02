import React, {useState} from 'react';
import Question from "./elements/question";
import {Form} from "react-bootstrap";

const Promo = ({promo}) => {
    console.log(promo)
    const [validated, setValidated] = useState(false);

    const handleSubmit = event => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation()
        }
        setValidated(true)
    };

    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div className='page-header -action'>
                    <div className='page-header-title'>
                        Акции
                    </div>
                    <div className='page-header-action'>
                        <button type="submit">Сохранить</button>
                    </div>
                </div>
                <div className='page-container'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5>Информация об акции</h5>
                            <div>

                                    <Form.Control as="select">
                                        <option>1</option>
                                        <option>3</option>
                                    </Form.Control>
                                    <Form.Control type="text" placeholder="Название акции" required/>
                                    <Form.Control as="textarea" rows="5" placeholder="Описание акции"/>
                            </div>
                            <h5>Условия акции</h5>
                            {/*{promo.questions.map(question => {
                                return <Question quest={question}/>
                            })}*/}
                            {/*<Question quest={questions}/>*/}
                        </div>
                    </div>
                </div>
            </Form>
        </>
    )
};

//const PromosReduxForm = reduxForm({form: 'edit-promo'})(Promo);
export default Promo;