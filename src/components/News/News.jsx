import React from 'react'
import CardNews from '../common/element/CardNews'

const News = ({ news, createNews, deleteNews, detail }) => {
    return (
        <div>
            <div className='page-header -action'>
                <div className='page-header-title'>
                    Новости
                </div>
                <div className='page-header-action'>
                    <button onClick={createNews} className='btn btn-primary'>Добавить новость</button>
                </div>
            </div>
            <div className='page-container'>
                {news && news.map(n =>
                    <CardNews news={n} deleteNews={deleteNews} detail={detail} key={n._id}/>,
                )}
            </div>
        </div>
    )
}

export default News
