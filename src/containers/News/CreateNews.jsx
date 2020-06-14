import React from 'react'
import {createNewNews} from "../../redux/news-reducer";
import {connect} from "react-redux";
import NewsForm from "../../components/News/NewsForm";

class CreateNewsContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

    postNews = (news) => {
        let formData = new FormData();
        for (let key in news) {
            formData.append(key, news[key])
        }
        formData.append('image', this.state.file)
        this.props.createNews(formData);
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        this.setState({file: event.target.files[0]})
    }

    cancel = () => {
        this.props.history.goBack();
    };

    render() {
        return <NewsForm onSubmit={this.postNews} uploadFile={this.uploadFile} cancel={this.cancel} />
    }
}

let mapStateToProps = (state) => {
    return {}
};

let mapDispatchToProps = (dispatch) => {
    return {
        createNews: (news) => {
            dispatch(createNewNews(news))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateNewsContainer)