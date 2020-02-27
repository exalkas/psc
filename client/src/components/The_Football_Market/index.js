import React, { Component } from 'react';

import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageRight } from '../utils/graphics'

import { THEMARKETTEXTS } from '../../Resources/Constants/Texts/thefootballmarket_texts';

import Mbappe from '../../Resources/KylianMbappeFrancia.webp';
import Ronaldo from '../../Resources/RonaldoLeft.webp';
import Ibra from '../../Resources/Zlatan_Ibrahimovic.webp';
import Neymar from '../../Resources/NeymarLeft.webp';
import Martial from '../../Resources/Martial.webp';
import Nagatomo from '../../Resources/Nagatomo.webp';

class TheFootballMarket extends Component {

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
                <EmptyRightStripe />
                <GraphicalImageLeft 
                    topOne = {THEMARKETTEXTS.firstTopOne[this.state.locale]} 
                    topTwo = {THEMARKETTEXTS.firstTopTwo[this.state.locale]}
                    topFour = {THEMARKETTEXTS.firstTopFour[this.state.locale]}
                    topFive = {THEMARKETTEXTS.firstTopFive[this.state.locale]}
                />
                <GraphicalImageRight 
                    topOne = {THEMARKETTEXTS.secondTopOne[this.state.locale]} 
                    topTwo = {THEMARKETTEXTS.secondTopTwo[this.state.locale]}
                    topFour = {THEMARKETTEXTS.secondTopFour[this.state.locale]}
                    topFive = {THEMARKETTEXTS.secondTopFive[this.state.locale]}                

                    botOne = {THEMARKETTEXTS.secondBotOne[this.state.locale]}
                    botTwo = {THEMARKETTEXTS.secondBotTwo[this.state.locale]}    
                    image = {[Mbappe, 'Mbappe']}
                />
                <GraphicalImageLeft 
                
                    image = {[Ronaldo, 'Ronaldo']}
                />
                <GraphicalImageRight 
                    
                    image = {[Ibra, 'Ibrahimovic']}
                />
                <GraphicalImageLeft 
                    
                    image = {[Neymar, 'Neymar']}
                />
                <GraphicalImageRight 
                
                image = {[Martial, 'Martial']}
                />
                <GraphicalImageLeft 
                    
                    image = {[Nagatomo, 'Nagatomo']}
                />
            </div>
        );
    }
}

export default TheFootballMarket;