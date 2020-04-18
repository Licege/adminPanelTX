import React from 'react'
import PromoForm from "../../components/Promos/PromoForm";

class PromosNewContainer extends React.Component {
    componentDidMount() {

    }

    onSubmit = (data) => {
        console.log(data);
    }

    goBack = () => {
        this.props.history.push('/promos')
    }

    render() {
        return <PromoForm onSubmit={this.onSubmit} goBack={this.goBack} />
    }
}

export default PromosNewContainer;