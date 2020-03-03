import React, { Component } from 'react';

import GOOGLE from '../../Resources/gplay.png';
import APPLE from '../../Resources/astore2.png';
import GERMANY from '../../Resources/flag_germany.png';
import AUSTRIA from '../../Resources/flag_austria.png';
import SWISS from '../../Resources/flag_Swiss.png';
import UK from '../../Resources/flag_uk.png';
import CHINA from '../../Resources/flag_china.png';
import TAIWAN from '../../Resources/flag_Taiwan.png';

class Buy extends Component {

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
            <div className='buy_container'>
                <div className='first_div'>
                    <div className='top'>
                        <h1>PRO SPORT</h1>
                    </div>
                    <div className='bottom'>
                        <h1>COIN</h1>
                    </div>
                </div>
                <div className='second_div'>
                    <div className='left'>
                        <h3>DOWNLOAD</h3>
                        <h3>YOUR</h3>
                        <h3>PSC</h3>
                        <h3>WALLET</h3>
                    </div>
                    <div className='right'>
                        <div className='image1'>
                            <img src={GOOGLE} alt='google play store'/>
                        </div>
                        <div className='image2'>
                            <img src={APPLE} alt='apple store'/>
                        </div>
                        <div className='image3'></div>
                    </div>
                </div>
                <div className='flags_div'>
                    <div className='left'>
                        <h3>CONTACT</h3>
                        <h3>YOUR</h3>
                        <h3>REGIONAL</h3>
                        <h3>AGENT FOR</h3>
                        <h3>DISCOUNTS</h3>
                    </div>
                    <div className='right'>
                        <div className='row'>
                            <div className='image1'><img className='flag' src={GERMANY} alt='flag of Germany'/></div>    
                            <div className='image1'><img className='flag' src={AUSTRIA} alt='flag of Austria'/></div>    
                            <div className='image1'><img className='flag' src={SWISS} alt='flag of Switzerland'/></div>    
                        </div>
                        <div className='row'>
                            <div className='image1'><img className='flag' src={UK} alt='flag of UK'/></div>    
                            <div className='image1'><img className='flag' src={CHINA} alt='flag of China'/></div>    
                            <div className='image1'><img className='flag' src={TAIWAN} alt='flag of Taiwan'/></div>    
                        </div>
                    </div>
                </div>
                <div className='second_div'>
                    <div className='left'>
                        <h3>MAKE</h3>
                        <h3>A</h3>
                        <h3>PAYMENT</h3>
                    </div>
                    <div className='right'>
                        <div className='image1'></div>
                        <div className='image2'>
                            <button>Buy Now</button>
                        </div>
                        <div className='image3'></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Buy;