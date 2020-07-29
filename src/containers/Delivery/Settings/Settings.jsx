import React from 'react'
import { connect } from 'react-redux'
import {
    createDeliverySettings, deleteDeliverySettings,
    requestDeliverySettings,
    requestGlobalDeliverySettings, updateDeliverySettings,
    updateGlobalDeliverySettings,
} from '../../../redux/delivery-reducer'
import Settings from '../../../components/Delivery/Settings/Settings'

class SettingsContainer extends React.Component {
    componentDidMount() {
        if (!this.props.settings.length) this.props.getSettings()
        if (!Object.keys(this.props.global_settings).length) this.props.getGlobalSettings()
    }

    postGlobalSettings = ( settings ) => {
        this.props.updateGlobalSettings(settings)
        console.log(settings)
    }

    createSettings = () => {
        this.props.history.push(`delivery-settings/new`)
    }

    editSettings = ( id ) => {
        return () => {
            this.props.history.push(`delivery-settings/edit/${id}`)
        }
    }

    render() {
        return <Settings settings={this.props.settings}
                         global_settings={this.props.global_settings}
                         createSettings={this.createSettings}
                         editSettings={this.editSettings}
                         postGlobalSettings={this.postGlobalSettings}/>
    }
}

let mapStateToProps = ( state ) => {
    return {
        settings: state.deliveryPage.settings,
        global_settings: state.deliveryPage.global_settings,
    }
}

let mapDispatchToProps = ( dispatch ) => {
    return {
        getGlobalSettings: () => {
            dispatch(requestGlobalDeliverySettings())
        },
        updateGlobalSettings: ( settins ) => {
            dispatch(updateGlobalDeliverySettings(settins))
        },
        getSettings: () => {
            dispatch(requestDeliverySettings())
        },
        createSettings: ( settings ) => {
            dispatch(createDeliverySettings(settings))
        },
        updateSettings: ( settings ) => {
            dispatch(updateDeliverySettings(settings))
        },
        deleteSettings: ( id ) => {
            dispatch(deleteDeliverySettings(id))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsContainer)
