import React, { Component } from 'react';

import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageRight } from '../utils/graphics'

import { THEMARKETTEXTS } from '../../Resources/Constants/Texts/thefootballmarket_texts';

import Mbappe from '../../Resources/KylianMbappeFrancia.webp';
import Ronaldo from '../../Resources/RonaldoLeft.webp';
import Ibra from '../../Resources/Zlatan_Ibrahimovic.webp';
import Neymar from '../../Resources/NeymarLeft.webp';
import Martial from '../../Resources/Martial.webp';
import Nagatomo from '../../Resources/Nagatomo.webp';
import NeymarImage from '../../Resources/neymar_graph_image.webp';

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
                    topOne = {THEMARKETTEXTS.thirdTopOne[this.state.locale]} 
                    topFour = {THEMARKETTEXTS.thirdTopTwo[this.state.locale]}
                    topFive = {THEMARKETTEXTS.thirdTopThree[this.state.locale]}

                    botOne = {THEMARKETTEXTS.thirdBotOne[this.state.locale]}
                    botTwo = {THEMARKETTEXTS.thirdBotTwo[this.state.locale]}   
                    className = 'ronaldo2'
                    image = {[Ronaldo, 'Ronaldo']}
                />
                <GraphicalImageRight 
                    topOne = {THEMARKETTEXTS.fourthTopOne[this.state.locale]} 
                    topTwo = {THEMARKETTEXTS.fourthTopTwo[this.state.locale]}
                    topFour = {THEMARKETTEXTS.fourthTopFour[this.state.locale]}
                    topFive = {THEMARKETTEXTS.fourthTopFive[this.state.locale]}                

                    botOne = {THEMARKETTEXTS.fourthBotOne[this.state.locale]}
                    botTwo = {THEMARKETTEXTS.fourthBotTwo[this.state.locale]}  
                    image = {[Ibra, 'Ibrahimovic']}
                />
                <GraphicalImageLeft 
                    topOne = {THEMARKETTEXTS.fifthTopOne[this.state.locale]} 
                    topFive = {THEMARKETTEXTS.fifthTopFive[this.state.locale]}  
                    topImage = {[NeymarImage, 'Neymar Graph']}
                    image = {[Neymar, 'Neymar']}
                />
                <GraphicalImageRight 
                    topOne = {THEMARKETTEXTS.sixTopOne[this.state.locale]} 
                    topTwo = {THEMARKETTEXTS.sixTopTwo[this.state.locale]}
                    topFour = {THEMARKETTEXTS.sixTopFour[this.state.locale]}
                    topFourB = {THEMARKETTEXTS.sixTopFourB[this.state.locale]}
                    topFive = {THEMARKETTEXTS.sixTopFive[this.state.locale]}  
                    image = {[Martial, 'Martial']}
                />
                <GraphicalImageLeft 
                    topOne = {THEMARKETTEXTS.sevenTopOne[this.state.locale]} 
                    topTwo = {THEMARKETTEXTS.sevenTopTwo[this.state.locale]}
                    topFour = {THEMARKETTEXTS.sevenTopFour[this.state.locale]}
                    topFive = {THEMARKETTEXTS.sevenTopFive[this.state.locale]}         
                    className= 'nagamoto'
                    image = {[Nagatomo, 'Nagatomo']}
                />
            </div>
        );
    }
}

export default TheFootballMarket;