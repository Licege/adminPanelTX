import React from 'react';
import News from './News';


class NewsContainer extends React.Component{
    componentDidMount() {

    }

    render() {
        return <>
                {this.props.isFetching ? 'Показать прелоадер' : null}
                <News />
                </>
    }
}

export default NewsContainer;