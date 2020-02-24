//Handle note found pages
import React, { Component } from 'react';

import { NOTFOUNDTEXTS } from '../../Resources/Constants/Texts/not_found'

import { FaExclamationCircle } from 'react-icons/fa';

class PageNotFound extends Component {

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

    render() {
        return (
            <div className="container">
                <div className="not_found_container">
                    <FaExclamationCircle/>
                    <div>
                        {NOTFOUNDTEXTS.message[this.state.locale]}
                    </div>
                </div>
            </div>
        );
    
    }
};

export default PageNotFound;