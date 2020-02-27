import React, { Component } from 'react';
import {NEWSTEXT} from '../../Resources/Constants/Texts/news';

import NewsItem from './newsitem.js'

class NewsComponent extends Component {

    state = {
        locale: 'en'
    }

    componentDidMount() {
        
        document.addEventListener('langChanged', this.handleLocale);

        this.setState({locale: localStorage.getItem('lang_pref')})
    }

    componentWillUnmount() {
        document.removeEventListener('langChanged', this.loadTexts);
    }
    
    handleLocale = () => {
        this.setState({locale: localStorage.getItem('lang_pref')})
    }

    render() {
        return (
            <div className='news_container'>
                {
                    NEWSTEXT && NEWSTEXT.length > 0 ? NEWSTEXT.map((item, i) => 
                    <div className='newsitem_wrapper' key={i}>
                        <NewsItem 
                            item={item}
                            locale={this.state.locale}
                            idx={i}
                        />
                    </div>
                    ) 
                    : 'There are no news available to display'
                }
            </div>
        );
    }
}

export default NewsComponent;