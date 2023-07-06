import React from 'react';
import './article.css';

const Article = ({ imgUrl, date, name, description, rating }) => {
    return(
        <div className='mehfoozghar__blog-container_article'>
            <div className='mehfoozghar__blog-container_article-img'>
                <img src= {imgUrl} alt='blog' />
            </div>
            <div className='mehfoozghar__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h4>{rating}</h4>
                </div>
                <p>Review the Muhafiz</p>
            </div>
        </div>
    )
}

export default Article