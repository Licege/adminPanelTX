import React from 'react'
import PromoForm from "../../components/Promos/PromoForm";
import {postPromo} from "../../redux/promos-reducer";
import {connect} from "react-redux";

class PromosNewContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

    onSubmit = (data) => {
        console.log(data);
        let formData = new FormData()
        for (let key in data) {
            if (data.hasOwnProperty(key)) formData.append(key, data[key])
        }
        this.state.file && formData.append('image', this.state.file)
        this.props.createPromo(formData)
        this.goBack();
    }

    goBack = () => {
        this.props.history.push('/promos')
    }

    uploadFile = (event) => {
        this.setState({file: event.target.files[0]})
    }

    render() {
        return <PromoForm onSubmit={this.onSubmit} uploadFile={this.uploadFile} goBack={this.goBack} />
    }
}

let mapStateToProps = (state) => {
    return {}
}

let mapDispatchToProps = (dispatch) => {
    return {
        createPromo: (promo) => {
            dispatch(postPromo(promo))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PromosNewContainer)