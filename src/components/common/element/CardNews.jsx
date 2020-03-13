import React from 'react'
import altImg from  "../../../static/img/news.jpg";
import {tsToDate} from "../../../plagins/helpers";

const CardNews = ( {news, deleteNews, detail} ) => {
    return (
        <div className='card_news'>
            <div className='card'>
                <div className='card-body card_news-content'>
                    {news.create_at && <div className='card_news-content-date'>{tsToDate(news.create_at, "dd MMMM")}</div>}
                    <img className='card_news-content-img' src={news.url ? news.url : altImg} alt='' />
                    <div className='card_news-content-info'>
                        <div className='card_news-content-info-header'>
                            {news.label && <a href={'news/edit/'+news.id} className='card_news-content-info-header-title'>{news.label}</a>}
                        </div>
                        {news.content && <div className='card_news-content-info-description'>{news.content}</div>}
                        <div className='card_news-content-info-link'>
                            <button onClick={(e) => detail(news.id)}>Подробнее...</button>
                            <button onClick={(e) => deleteNews(news.id)}>Удалить</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardNews;