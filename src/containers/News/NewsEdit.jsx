import React from 'react';
import {deleteNews, getCurrentNews, updateNews} from "../../redux/news-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import Preloader from "../../components/common/Preloader/Preloader";
import NewsForm from "../../components/News/NewsForm";
import {postFile} from "../../redux/file-reducer";

class EditNewsContainer extends React.Component{
    refreshDetailNews () {
        let id = this.props.match.params.id;
        this.props.getCurrentNews(id)
    }

    componentDidMount() {
        this.refreshDetailNews()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.id !== prevProps.match.params.id ) {
            this.refreshDetailNews();
        }
    }

    updateNews = (data) => {
        this.props.updateCurrentNews(data);
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        let formDate = new FormData();
        formDate.append("file", event.target.files[0])
        this.props.postFile(formDate)
    }

    cancel = () => {
        this.props.history.goBack()
    };

    deleteNews = () => {
        this.props.deleteNews(this.props.match.params.id);
        this.props.history.goBack()
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <NewsForm initialValues={this.props.currentNews}
                      onSubmit={this.updateNews}
                      uploadFile={this.uploadFile}
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
        },
        postFile: (file) => {
            dispatch(postFile(file))
        }
    }
};

export default compose(connect(mapStateToProps, mapDispatchToProps)) (EditNewsContainer);