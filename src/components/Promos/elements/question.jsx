import React from 'react';
import deleteBucket from '../../../static/img/delete.png';


const Question = ({question, addAnswer}) => {
    console.log(question)

    let answers = [...question.answers, ''];
    console.log(answers)

/*    const addAnswer = () => {
        answers.push('')
    };*/

    const deleteAnswer = (id) => {
        console.log(id)
        answers.splice(id, 1)
    };

    return (
        <>
            {answers.map((answer, key) => (
                answers.length-1 !== key
                ? <div className='questions-question' key={key}>
                    <input className='questions-question-input form-control' defaultValue={answer.value} />
                    <button className='questions-question-delete' onClick={(e) => deleteAnswer(key)} ><img src={deleteBucket} alt='Удалить' /></button>
                  </div>
                    : <input className='questions-question-input form-control' onChange={addAnswer} defaultValue={answer} key={key} placeholder='Добавить вариант ответа'/>

            ))}
        </>
    )
};

export default Question;