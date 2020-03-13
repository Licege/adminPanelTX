import React from 'react'
import {createNewNews} from "../../../redux/news-reducer";
import {connect} from "react-redux";
import CreateNews from "./CreateNews";

class CreateNewsContainer extends React.Component{
    postNews = (news) => {
        let data = { ...news };
        data.create_at = Date.parse(new Date().toString());
        console.log(data);
        this.props.createNews(data);
        this.props.history.goBack();
    };

    cancel = () => {
        this.props.history.goBack();
    };

    render() {
        return <CreateNews onSubmit={this.postNews} cancel={this.cancel} />
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