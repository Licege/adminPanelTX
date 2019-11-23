import React from 'react';
import Promos from "./Promos";


class ContainerPromos extends React.Component {
    componentDidMount() {
        console.log('Не забудь добавить апи в акции')
    }

    render() {
        let test = [
            'Ответ 1', 'Ответ 2', 'Ответ 4'
        ]
        return <Promos test={test}/>
    }

}

export default ContainerPromos;