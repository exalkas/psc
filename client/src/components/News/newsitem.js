import React from 'react';

const NewsItem = ({item = null, locale = null, idx = 0}) => {
    console.log('NEWS ITEM=', item)
    return (
        <div className='newsitem_container' key={idx}>
            <h2>{item.title[locale]}</h2>
            <h3>{item.date}</h3>
            {item[locale].map((paragraph, idx2) => 
                <p key={idx2}>{paragraph}</p>
            )}
        </div>
    );
};

export default NewsItem; 