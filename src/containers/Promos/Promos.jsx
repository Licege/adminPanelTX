import React from 'react';
import {connect} from "react-redux";
import Promos from "../../components/Promos/Promos";


class ContainerPromos extends React.Component {
    componentDidMount() {
        console.log('Не забудь добавить апи в акции')
    }
    promos = [...this.props.promos];

    addAnswer = () => {
        console.log('12')
        this.test.push('')
    };

    render() {
        return <Promos promos={this.promos} addAnswer={this.addAnswer}/>
    }

}

let mapStateToProps = (state) => {
    return {
        promos: state.promosPage.promos
    }
};

export default connect(mapStateToProps, {}) (ContainerPromos);