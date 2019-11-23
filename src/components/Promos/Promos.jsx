import React from 'react';
import Question from "./elements/question";

const Promos = ({test}) => {
    return (
        <>
            <div className='page-header'>
                <div className='page-header-title'>
                    Акции
                </div>
            </div>
            <div className='page-container'>
                <div className='card'>
                    <div className='card-body'>
                        <Question quest={test}/>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Promos;