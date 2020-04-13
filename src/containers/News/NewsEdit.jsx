import React from 'react';
import {getCurrentNews, updateNews} from "../../redux/news-reducer";
import {connect} from "react-redux";
import Preloader from "../../components/common/Preloader/Preloader";
import NewsForm from "../../components/News/NewsForm";
import {postFile} from "../../redux/file-reducer";

class EditNewsContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

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

    updateNews = (news) => {
        let formData = new FormData();
        for (let key in news) {
            formData.append(key, news[key])
        }
        this.state.file && formData.append('image', this.state.file)
        this.props.updateCurrentNews(formData, news._id);
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        this.state.file = event.target.files[0]
    }

    cancel = () => {
        this.props.history.goBack()
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <NewsForm initialValues={this.props.currentNews}
                      onSubmit={this.updateNews}
                      uploadFile={this.uploadFile}
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
        updateCurrentNews: (currentNews, id) => {
            dispatch(updateNews(currentNews, id))
        },
        postFile: (file) => {
            dispatch(postFile(file))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (EditNewsContainer);