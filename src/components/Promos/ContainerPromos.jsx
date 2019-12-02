import React from 'react';
import Promo from "./Promo";
import {connect} from "react-redux";
import Promos from "./Promos";


class ContainerPromos extends React.Component {
    componentDidMount() {
        console.log('Не забудь добавить апи в акции')
    }
    promos = [...this.props.promos];

    addAnswer = () => {
        this.test.push('')
    };

    render() {

        return <Promos promos={this.promos} />
    }

}

let mapStateToProps = (state) => {
    return {
        promos: state.promosPage.promos
    }
};

export default connect(mapStateToProps, {}) (ContainerPromos);