import React from 'react'
import {connect} from "react-redux";
import {requestDeliverySettingsById, updateDeliverySettings} from "../../../redux/delivery-settings-reducer";
import SettingsForm from "../../../components/Delivery/Settings/Tabs/Common_Settings/SettingsForm";

class SettingsCommonEdit extends React.Component {
    componentDidMount() {
        if (!this.props.currentSettings || this.props.currentSettings._id !== this.props.match.params.id) this.props.getSettingsById(this.props.match.params.id)
    }

    onSubmit = (settings) => {
        this.props.updateSettings(settings)
        this.goBack()
    }

    goBack = () => {
        this.props.history.goBack()
    }

    render() {
        return <SettingsForm onSubmit={this.onSubmit} cancel={this.goBack} initialValues={this.props.currentSettings}/>
    }
}

let mapStateToProps = (state) => {
    return {
        currentSettings: state.deliverySettingsPage.currentSettings
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getSettingsById: (id) => {
            dispatch(requestDeliverySettingsById(id))
        },
        updateSettings: (settings) => {
            dispatch(updateDeliverySettings(settings))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsCommonEdit)