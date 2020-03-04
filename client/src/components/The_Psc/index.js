import React, { Component } from 'react';

import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageRight, GraphicalImageLeftBotArray } from '../utils/graphics'

import { THEPSCTEXTS } from '../../Resources/Constants/Texts/thepsc';

import MESSI from '../../Resources/02.Messi.png';
import RUI from '../../Resources/02.Rui-Patrício.png';
import ROBBEN from '../../Resources/02.Arjen Robben.png';
import HIGUAIN from '../../Resources/02.Higuain.png';
import LEWANDOWSKI from '../../Resources/02.Lewandowski.png';


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
            <div className='who_container'>
                <EmptyRightStripe />
                <GraphicalImageLeft 
                    topOne = {THEPSCTEXTS.firstTopOne[this.state.locale]} 
                    topTwo = {THEPSCTEXTS.firstTopTwo[this.state.locale]}
                    topFour = {THEPSCTEXTS.firstTopFour[this.state.locale]}
                    className= 'neymarWho'
                    image = {[HIGUAIN, 'Higuain']}
                />
                <GraphicalImageRight 
                    topOne = {THEPSCTEXTS.secondTopOne[this.state.locale]} 
                    topTwo = {THEPSCTEXTS.secondTopTwo[this.state.locale]}
                    topFour = {THEPSCTEXTS.secondTopFour[this.state.locale]}
                    botOne = {THEPSCTEXTS.secondBotOne[this.state.locale]}
                    botTwo = {THEPSCTEXTS.secondBotTwo[this.state.locale]}
                    image = {[MESSI, 'Messi']}
                    className= 'ronaldoWho'
                    />
                <GraphicalImageLeftBotArray 
                    topOne = {THEPSCTEXTS.thirdTopOne[this.state.locale]} 
                    topTwo = {THEPSCTEXTS.thirdTopTwo[this.state.locale]}
                    topFour = {THEPSCTEXTS.thirdTopFour[this.state.locale]}
                    bot = {THEPSCTEXTS.thirdBot[this.state.locale]}
                    className= 'robbenWho'
                    image = {[RUI, 'Rui Patricio']}
                />
                <GraphicalImageRight // Lewandowski
                    topOne = {THEPSCTEXTS.fourthTopOne[this.state.locale]} 
                    topFour = {THEPSCTEXTS.fourthTopFour[this.state.locale]}
                    botOne = {THEPSCTEXTS.fourthBotOne[this.state.locale]}
                    botTwo = {THEPSCTEXTS.fourthBotTwo[this.state.locale]}
                    image = {[LEWANDOWSKI, 'Lewandovski']}
                    className= 'ronaldoWho'
                />
                <GraphicalImageLeftBotArray 
                    topOne = {THEPSCTEXTS.fifthTopOne[this.state.locale]} 
                    topTwo = {THEPSCTEXTS.fifthTopTwo[this.state.locale]}
                    topFour = {THEPSCTEXTS.fifthTopFour[this.state.locale]}
                    bot = {THEPSCTEXTS.fifthBot[this.state.locale]}
                    className= 'robbenWho'
                    image = {[ROBBEN, 'Arjen Robben']}
                />
            </div>
        );
    }
}

export default ThePsc;