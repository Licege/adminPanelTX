import React from 'react';
import {deleteNews, getCurrentNews, updateNews} from "../../../redux/news-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import DetailNews from "./DetailNews";
import Preloader from "../../common/Preloader/Preloader";

class DetailNewsContainer extends React.Component{
    refreshDetailNews () {
        let id = this.props.match.params.id;
        this.props.getCurrentNews(id)
    }

    updateNews = (data) => {
        this.props.updateCurrentNews(data);
        this.props.history.goBack();
    };

    cancel = () => {
        this.props.history.goBack()
    };

    deleteNews = () => {
        this.props.deleteNews(this.props.match.params.id);
        this.props.history.goBack()
    };

    componentDidMount() {
        this.refreshDetailNews()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id ) {
            this.refreshDetailNews();
        }
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <DetailNews initialValues={this.props.currentNews}
                        onSubmit={this.updateNews}
                        deleteNews={this.deleteNews}
                        cancel={this.cancel} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        currentNews: state.newsPage.currentNews,
        isFetching: state.newsPage.isFetching
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        getCurrentNews: (id) => {
            dispatch(getCurrentNews(id))
        },
        updateCurrentNews: (currentNews) => {
            dispatch(updateNews(currentNews))
        },
        deleteNews: (id) => {
            dispatch(deleteNews(id))
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps)) (DetailNewsContainer);