import React from 'react'
import {createNewNews} from "../../redux/news-reducer";
import {connect} from "react-redux";
import NewsForm from "../../components/News/NewsForm";
import {postFile} from "../../redux/file-reducer";

class CreateNewsContainer extends React.Component{
    postNews = (news) => {
        let data = { ...news };
        data.create_at = Date.parse(new Date().toString());
        data.file = this.props.file;
        console.log(data);
        this.props.createNews(data);
        this.props.history.goBack();
    };

    uploadFile = (event) => {
        let formDate = new FormData();
        formDate.append("file", event.target.files[0])
        this.props.postFile(formDate)
    }

    cancel = () => {
        this.props.history.goBack();
    };

    render() {
        return <NewsForm onSubmit={this.postNews} uploadFile={this.uploadFile} cancel={this.cancel} />
    }
}

let mapStateToProps = (state) => {
    return {
        file: state.fileLoad.file
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        createNews: (news) => {
            dispatch(createNewNews(news))
        },
        postFile: (file) => {
            dispatch(postFile(file))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (CreateNewsContainer)