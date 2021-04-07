import React from 'react'
import CardNews from '../common/element/CardNews'
import {PageHeader} from '../../styledComponents/components'

const News = ({ news, createNews, deleteNews, detail }) => {
    return (
        <div>
          <PageHeader title='Новости'>
            <button onClick={createNews} className='btn btn-primary'>Добавить новость</button>
          </PageHeader>
            <div className='page-container'>
                {news && news.map(n =>
                    <CardNews news={n} deleteNews={deleteNews} detail={detail} key={n._id}/>,
                )}
            </div>
        </div>
    )
}

export default News
