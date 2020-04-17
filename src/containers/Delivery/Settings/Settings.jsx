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
    }

    postGlobalSettings = (settings) => {
        this.props.updateGlobalSettings(settings);
        console.log(settings)
    };

    postSettings = () => {
        this.props.history.push(`delivery-settings/new`)
    };

    editSettings = (id) => {
        return () => {
            this.props.history.push(`delivery-settings/edit/${id}`)
        }
    }

    render() {
        return <Settings settings={this.props.settings}
                         global_settings={this.props.global_settings}
                         postSettings={this.postSettings}
                         editSettings={this.editSettings}
                         postGlobalSettings={this.postGlobalSettings} />
    }
}

let mapStateToProps = (state) => {
    return {
        settings: state.deliverySettingsPage.settings,
        global_settings: state.deliverySettingsPage.global_settings,
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
        updateCity: (city) => {
            dispatch(updateCity(city))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SettingsContainer);