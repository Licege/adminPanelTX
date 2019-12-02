

let initialState = {
    promos: [
        {
            type: 1,
            title: "Тестовая акция",
            questions: [
                {
                    title: 'Вопрос 1',
                    answers: [
                        {id: 1, value: '100'},
                        {id: 2, value: '200'},
                        {id: 3, value: '300'},
                        {id: 4, value: '400'}
                    ],
                    count_answered: 3,
                    points: 500
                },
                {
                    title: 'Вопрос 2',
                    answers: [
                        {id: 5, value: '500'},
                        {id: 6, value: '600'},
                        {id: 7, value: '700'},
                        {id: 8, value: '800'}
                    ],
                    count_answered: 4,
                    points: 1500
                }
            ]
        },
        {
            type: 1,
            title: "Тестовая акция 2",
            questions: [
                {
                    title: 'Вопрос 1',
                    answers: [
                        {id: 1, value: '100'},
                        {id: 2, value: '200'},
                        {id: 3, value: '300'},
                        {id: 4, value: '400'}
                    ],
                    count_answered: 3,
                    points: 500
                },
                {
                    title: 'Вопрос 2',
                    answers: [
                        {id: 5, value: '500'},
                        {id: 6, value: '600'},
                        {id: 7, value: '700'},
                        {id: 8, value: '800'}
                    ],
                    count_answered: 4,
                    points: 1500
                }
            ]
        }
    ]
};

const promosReducer = (state = initialState, action) => {
    return state
};

export default promosReducer;