import React from 'react';
import {connect} from "react-redux";
import SettingsForm from "./SettingsForm";
import {requestDeliverySettings} from "../../../../../../redux/delivery-settings-reducer";

class SettingsFormContainer extends React.Component {
    componentDidMount() {
    }

    render() {
        return <SettingsForm cities={this.props.cities} />
    }
}

let mapStateToProps = (state) => {
    return {
        cities: state.deliverySettingsPage.cities,
        sitties: state.deliverySettingsPage.settings
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getSitties: () => {
            dispatch(requestDeliverySettings())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SettingsFormContainer);