import React, { Component } from 'react';

import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageLeftBotArray, GraphicalImageRightBotArray } from '../utils/graphics'
import { JOINPSCTEXTS } from '../../Resources/Constants/Texts/joinpsc_texts';

class JoinPsc extends Component {

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
            <div className='joinpsc_container'>
                <EmptyRightStripe />
                <GraphicalImageLeftBotArray // 1st  
                    topOne = {JOINPSCTEXTS.firstTopOne[this.state.locale]} 
                    topTwo = {JOINPSCTEXTS.firstTopTwo[this.state.locale]}
                    topFour = {JOINPSCTEXTS.firstTopFour[this.state.locale]}
                    button = {JOINPSCTEXTS.buttonContact[this.state.locale]}
                    bot = {JOINPSCTEXTS.firstBot[this.state.locale]}
                    className= 'robbenWho'
                />
                <GraphicalImageRightBotArray // 2nd
                    topOne = {JOINPSCTEXTS.secondTopOne[this.state.locale]} 
                    topTwo = {JOINPSCTEXTS.secondTopTwo[this.state.locale]}
                    topFour = {JOINPSCTEXTS.secondTopFour[this.state.locale]}
                    bot = {JOINPSCTEXTS.secondBot[this.state.locale]}
                    button = {JOINPSCTEXTS.buttonJoin[this.state.locale]}
                    className= 'ronaldoWho'
                    />
                <GraphicalImageLeftBotArray // 3rd
                    topOne = {JOINPSCTEXTS.thirdTopOne[this.state.locale]} 
                    topTwo = {JOINPSCTEXTS.thirdTopTwo[this.state.locale]}
                    topFour = {JOINPSCTEXTS.thirdTopFour[this.state.locale]}
                    bot = {JOINPSCTEXTS.thirdBot[this.state.locale]}
                    button = {JOINPSCTEXTS.buttonJoin[this.state.locale]}
                    className= 'robbenWho'
                />
                <GraphicalImageRightBotArray // 4th
                    topOne = {JOINPSCTEXTS.fourthTopOne[this.state.locale]} 
                    topFour = {JOINPSCTEXTS.fourthTopFour[this.state.locale]}
                    bot = {JOINPSCTEXTS.fourthBot[this.state.locale]}
                    button = {JOINPSCTEXTS.buttonJoin[this.state.locale]}
                    className= 'ronaldoWho'
                />
                <GraphicalImageLeft // 5th
                    topOne = {JOINPSCTEXTS.fifthTopOne[this.state.locale]} 
                    topTwo = {JOINPSCTEXTS.fifthTopTwo[this.state.locale]}
                    botTwo = {JOINPSCTEXTS.fifthBotTwo[this.state.locale]}
                    button = {JOINPSCTEXTS.buttonGuide[this.state.locale]}
                    className= 'robbenWho'
                />
            </div>
        );
    }
}

export default JoinPsc;