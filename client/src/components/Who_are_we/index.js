import React, { Component } from 'react';

import { EmptyLeftStripe, GraphicalImageLeft, GraphicalImageRight } from '../utils/graphics';

import Ronaldo from '../../Resources/ronaldo.png';
import Neymar from '../../Resources/neymar.png';
import Bale from '../../Resources/GarethBale.png';
import Messi from '../../Resources/LionelMessi.png';

import { WHOAREWETEXTS } from '../../Resources/Constants/Texts/whoarewe';
import { HOMEPAGETEXTS } from '../../Resources/Constants/Texts/home';

class WhoAreWe extends Component {

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
                <EmptyLeftStripe />
                <GraphicalImageRight 
                    topOne = {WHOAREWETEXTS.thirdTopOne[this.state.locale]} 
                    topTwo = {WHOAREWETEXTS.thirdTopTwo[this.state.locale]}
                    topFour = {WHOAREWETEXTS.thirdTopFour[this.state.locale]}
                    topFive = {WHOAREWETEXTS.thirdTopFive[this.state.locale]}
                    botOne = {WHOAREWETEXTS.thirdBotOne[this.state.locale]}
                    botTwo = {WHOAREWETEXTS.thirdBotTwo[this.state.locale]}
                    image = {[Ronaldo, 'Ronaldo']}
                    className= 'ronaldoWho'
                    />
                <GraphicalImageLeft 
                    topOne = {WHOAREWETEXTS.fourthTopOne[this.state.locale]} 
                    topTwo = {WHOAREWETEXTS.fourthTopTwo[this.state.locale]}
                    topFour = {WHOAREWETEXTS.fourthTopFour[this.state.locale]}
                    topFive = {WHOAREWETEXTS.fourthTopFive[this.state.locale]}
                    botOne = {WHOAREWETEXTS.fourthBotOne[this.state.locale]}
                    botTwo = {WHOAREWETEXTS.fourthBotTwo[this.state.locale]}
                    className= 'neymarWho'
                    image = {[Neymar, 'Neymar']}
                />
                <GraphicalImageRight 
                    topOne = {WHOAREWETEXTS.fifthTopOne[this.state.locale]} 
                    topTwo = {WHOAREWETEXTS.fifthTopTwo[this.state.locale]}
                    topFour = {WHOAREWETEXTS.fifthTopFour[this.state.locale]}
                    topFive = {WHOAREWETEXTS.fifthTopFive[this.state.locale]}
                    botOne = {WHOAREWETEXTS.fifthBotOne[this.state.locale]}
                    botTwo = {WHOAREWETEXTS.fifthBotTwo[this.state.locale]}
                    image = {[Bale, 'Gareth Bale']}
                    className= 'baleWho'
                />
                <GraphicalImageLeft 
                    topTwo = {WHOAREWETEXTS.sixthTopTwo[this.state.locale]}
                    topFour = {WHOAREWETEXTS.sixthTopFour[this.state.locale]}
                    topFive = {WHOAREWETEXTS.sixthTopFive[this.state.locale]}
                    botOne = {WHOAREWETEXTS.sixthBotOne[this.state.locale]}
                    botTwo = {WHOAREWETEXTS.sixthBotTwo[this.state.locale]}
                    className= 'messiWho'
                    image = {[Messi, 'Messi']}
                />
            </div>
        );
    }
}

export default WhoAreWe;