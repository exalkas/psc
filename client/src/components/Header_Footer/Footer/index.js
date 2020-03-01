import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { FOOTER } from '../../../Resources/Constants/Texts/footer';
import { HashLink } from 'react-router-hash-link';

class Footer extends Component {

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
            <footer className="footer_container">
                <div className='footer_left'></div>
                 <Fade left big>
                    <div className='footer_center'>
                        {FOOTER.buttonText[this.state.locale]}
                    </div>
                 </Fade>
                 <div className='footer_right'>
                    <HashLink smooth to='#headerElement'><button className='bottom_button'>^</button></HashLink>
                 </div>
            </footer>
        );
    }
}
    
export default Footer;