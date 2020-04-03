import React from 'react'
import {connect} from "react-redux";
import {
    createDeliverySettings, deleteDeliverySettings, requestCities,
    requestDeliverySettings,
    requestGlobalDeliverySettings, updateCity, updateDeliverySettings,
    updateGlobalDeliverySettings
} from "../../../redux/delivery-settings-reducer";
import Settings from "../../../components/Delivery/Settings/Settings";

class SettingsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.settings.length) this.props.getSettings();
        if (!Object.keys(this.props.global_settings).length) this.props.getGlobalSettings();
        if (!this.props.cities.length) this.props.getCities();
    }

    postGlobalSettings = (settings) => {
        this.props.updateGlobalSettings(settings);
        console.log(settings)
    };

    postSettings = (settings) => {
        console.log(settings)
    };

    render() {
        return <Settings settings={this.props.settings}
                         global_settings={this.props.global_settings}
                         cities={this.props.cities}
                         postSettings={this.postSettings}
                         postGlobalSettings={this.postGlobalSettings} />
    }
}

let mapStateToProps = (state) => {
    return {
        settings: state.deliverySettingsPage.settings,
        global_settings: state.deliverySettingsPage.global_settings,
        cities: state.deliverySettingsPage.cities
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getGlobalSettings: () => {
            dispatch(requestGlobalDeliverySettings())
        },
        updateGlobalSettings: (settins) => {
            dispatch(updateGlobalDeliverySettings(settins))
        },
        getSettings: () => {
            dispatch(requestDeliverySettings())
        },
        createSettings: (settings) => {
            dispatch(createDeliverySettings(settings))
        },
        updateSettings: (settings) => {
            dispatch(updateDeliverySettings(settings))
        },
        deleteSettings: (id) => {
            dispatch(deleteDeliverySettings(id))
        },
        getCities: () => {
            dispatch(requestCities())
        },
        updateCity: (city) => {
            dispatch(updateCity(city))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SettingsContainer);