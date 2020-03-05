import React, { Component } from 'react';
import { EmptyRightStripe, GraphicalImageLeft, GraphicalImageRight } from '../utils/graphics'

import { PURCHASETEXTS } from '../../Resources/Constants/Texts/purchase_texts';

import COURTOUIS from '../../Resources/03.Courtois.png';
import GOTZE from '../../Resources/03.Mario_Gotze.png';
import OZIL from '../../Resources/03.MesutOzil.png';
import KROOS from '../../Resources/03.ToniKroos.png';

class PurchaseGuide extends Component {

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
            <div className='purchase_container'>
                <EmptyRightStripe />
                <GraphicalImageLeft 
                    topOne = {PURCHASETEXTS.firstTopOne[this.state.locale]} 
                    topTwo = {PURCHASETEXTS.firstTopTwo[this.state.locale]}
                    botOne = {PURCHASETEXTS.firstBotOne[this.state.locale]}
                    className= 'neymarWho'
                />
                <GraphicalImageRight 
                    topOne = {PURCHASETEXTS.secondTopOne[this.state.locale]} 
                    topFour = {PURCHASETEXTS.secondTopFour[this.state.locale]}
                    botOne = {PURCHASETEXTS.secondBotOne[this.state.locale]}
                    image = {[OZIL, 'Ozil']}
                    className= 'ronaldoWho'
                    button = {PURCHASETEXTS.buttonPart[this.state.locale]}
                    />
                <GraphicalImageLeft 
                    topOne = {PURCHASETEXTS.thirdTopOne[this.state.locale]} 
                    topTwo = {PURCHASETEXTS.thirdTopTwo[this.state.locale]}
                    topFour = {PURCHASETEXTS.thirdTopFour[this.state.locale]}
                    botOne = {PURCHASETEXTS.thirdBotOne[this.state.locale]}
                    className= 'neymarWho'
                    image = {[KROOS, 'Kroos']}
                    button = {PURCHASETEXTS.buttonTouch[this.state.locale]}
                />
                <GraphicalImageRight // Kortoix
                    topOne = {PURCHASETEXTS.fourthTopOne[this.state.locale]} 
                    topFour = {PURCHASETEXTS.fourthTopFour[this.state.locale]}
                    botOne = {PURCHASETEXTS.fourthBotOne[this.state.locale]}
                    image = {[COURTOUIS, 'Courtouis']}
                    className= 'courtouixWho'
                    button = {PURCHASETEXTS.buttonVisit[this.state.locale]}
                />
                <GraphicalImageLeft
                    topOne = {PURCHASETEXTS.fifthTopOne[this.state.locale]} 
                    topFour = {PURCHASETEXTS.fifthTopFour[this.state.locale]}
                    botTwo = {PURCHASETEXTS.fifthBotTwo[this.state.locale]}
                    className= 'robbenWho'
                    image = {[GOTZE, 'Gotze']}
                    button = {PURCHASETEXTS.buttonProceed[this.state.locale]}
                />
            </div>
        );
    }
}

export default PurchaseGuide;