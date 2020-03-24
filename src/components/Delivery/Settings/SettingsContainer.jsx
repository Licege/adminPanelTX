import React from 'react'
import {connect} from "react-redux";
import {
    createDeliverySettings, deleteDeliverySettings,
    requestDeliverySettings,
    requestGlobalDeliverySettings, updateDeliverySettings,
    updateGlobalDeliverySettings
} from "../../../redux/delivery-settings-reducer";
import Settings from "./Settings";

class SettingsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.settings.length) this.props.getSettings();
        this.props.getGlobalSettings();
    }

    render() {
        return <Settings settings={this.props.settings} global_settings={this.props.global_settings} />
    }
}

let mapStateToProps = (state) => {
    return {
        settings: state.deliverySettingsPage.settings,
        global_settings: state.deliverySettingsPage.global_settings
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (SettingsContainer);