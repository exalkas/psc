import React, { Component } from 'react';

import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageRight } from '../utils/graphics'

import { THEPSCTEXTS } from '../../Resources/Constants/Texts/thepsc';

import Mbappe from '../../Resources/KylianMbappeFrancia.webp';


class ThePsc extends Component {

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
            <div className='home_container'>

            </div>
        );
    }
}

export default ThePsc;