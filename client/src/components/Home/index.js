import React, { Component } from 'react';
import { GraphicalOne, GraphicalImageRight, GraphicalImageLeft } from '../utils/graphics';

import Ronaldo from '../../Resources/ronaldo.png';
import Neymar from '../../Resources/neymar.png';
import Bale from '../../Resources/GarethBale.png';
import Messi from '../../Resources/LionelMessi.png';

import { HOMEPAGETEXTS } from '../../Resources/Constants/Texts/home';

class HomePage extends Component {

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

                <GraphicalOne 
                    h2One = {HOMEPAGETEXTS.firstTop[this.state.locale]}
                    bottomOne = {HOMEPAGETEXTS.firstBottom[this.state.locale]}
                    topTwo = {HOMEPAGETEXTS.secondTop[this.state.locale]}
                    h2Two = {HOMEPAGETEXTS.secondBottom[this.state.locale]}
                    showTriangle = {true}
                />

                <GraphicalImageRight 
                    topOne = {HOMEPAGETEXTS.thirdTopOne[this.state.locale]} 
                    topTwo = {HOMEPAGETEXTS.thirdTopTwo[this.state.locale]}
                    topThree = {HOMEPAGETEXTS.thirdTopThree[this.state.locale]}
                    botOne = {HOMEPAGETEXTS.thirdBotOne[this.state.locale]}
                    botTwo = {HOMEPAGETEXTS.thirdBotTwo[this.state.locale]}
                    image = {[Ronaldo, 'Ronaldo']}
                    />
                <GraphicalImageLeft 
                    topOne = {HOMEPAGETEXTS.fourthTopOne[this.state.locale]} 
                    topTwo = {HOMEPAGETEXTS.fourthTopTwo[this.state.locale]}
                    topThree = {HOMEPAGETEXTS.fourthTopThree[this.state.locale]}
                    botOne = {HOMEPAGETEXTS.fourthBotOne[this.state.locale]}
                    botTwo = {HOMEPAGETEXTS.fourthBotTwo[this.state.locale]}
                    image = {[Neymar, 'Neymar']}
                />
                <GraphicalImageRight 
                    topOne = {HOMEPAGETEXTS.fifthTopOne[this.state.locale]} 
                    topTwo = {HOMEPAGETEXTS.fifthTopTwo[this.state.locale]}
                    topThree = {HOMEPAGETEXTS.fifthTopThree[this.state.locale]}
                    botOne = {HOMEPAGETEXTS.fifthBotOne[this.state.locale]}
                    botTwo = {HOMEPAGETEXTS.fifthBotTwo[this.state.locale]}
                    image = {[Bale, 'Gareth Bale']}
                    className= 'bale'
                />
                <GraphicalImageLeft 
                    topOne = {HOMEPAGETEXTS.sixthTopOne[this.state.locale]} 
                    topTwo = {HOMEPAGETEXTS.sixthTopTwo[this.state.locale]}
                    topThree = {HOMEPAGETEXTS.sixthTopThree[this.state.locale]}
                    botOne = {HOMEPAGETEXTS.sixthBotOne[this.state.locale]}
                    botTwo = {HOMEPAGETEXTS.sixthBotTwo[this.state.locale]}
                    className= 'messi'
                    image = {[Messi, 'Messi']}
                />
            </div>
        );
    }
}

export default HomePage;