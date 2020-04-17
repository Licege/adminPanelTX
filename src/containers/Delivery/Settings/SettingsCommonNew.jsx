import React from 'react'
import SettingsForm from "../../../components/Delivery/Settings/Tabs/Common_Settings/SettingsForm";
import {createDeliverySettings} from "../../../redux/delivery-settings-reducer";
import {connect} from "react-redux";

class SettingsCommonNew extends React.Component {
    onSubmit = (settings) => {
        console.log(settings);
        //this.props.createSettings(settings)
    }

    render() {
        return <SettingsForm onSubmit={this.onSubmit} />
    }
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        createSettings: (settings) => {
            dispatch(createDeliverySettings(settings))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SettingsCommonNew)