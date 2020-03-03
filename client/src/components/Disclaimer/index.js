import React, { Component } from 'react';

class Disclaimer extends Component {

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
            <div className='disclaimer_container'>
                <h2>COPYRIGHT</h2>
                <p>The content (content being images, text, sound and video files) of this website and all products of ProSportCoin are copyright, all rights expressly reserved. Access, printing and downloading content of this site is allowed always provided that:</p>
                <ol>
                    <li>on every copy there is the copyright acknowledgement and all present terms and conditions in order to be allowed the use of the content of the website,</li>
                    <li>any use of the above mentioned content (or of any part of it) be for merely informative, personal aims and for no trading purposes at all; moreover this use will absolutely not have to involve copying and/or sending nor transmitting this content to any other computer net or any other media,</li>
                    <li>(3) documents used may not be altered in any way.</li>
                </ol>
                <p>Any other use of this content will be punished according to the law. Graphic structure and elements of the web-site www.prosportcoin.com are not considered part of the above mentioned documents - All elements of this website are protected by trade-law and other laws, therefore they may not be copied nor reproduced in any other form, be it totally or only partially altered. - Logo and graphics of this website may not be copied nor submitted without clear permission given by ProSport. All written contents derived from other sources are copyright, all rights reserved, and belong to their own registered trademark.</p>
                <h3>Disclaimer</h3>
                <ul>
                    <li>Documents available on this website may contain inaccuracies or typing mistakes. ProSportCoin disclaims all liability for websites you can link to from this website.</li>
                    <li>With these web pages, ProSportCoin does not want to violate any copyright.</li>
                    <li>Information and images available on this website are public, at least as far as we know.</li>
                    <li>If, not knowingly, we published content that is under copyright or that violates the law, please let us know it and we will remove it as soon as possible.</li>
                    <li>The content of these pages is not at all meant to offend nor hurt anything or anybody.</li>
                    <li>Would that be the case, please, let us know it and we will act as soon as possible.</li>
                    <li>Products names, corporate names and companies mentioned in this website may be trademarks belonging to their holders or registered trademarks belonging to other companies and they all have been used solely for information purposes and to their owner's advantage, without aiming at any copyright infringements.</li>
                    <li>ProSporCoin reserves the right to modify the content of the whole website and of this disclaimer at any time and without notice.</li>
                </ul>
                <h3>Trademarks</h3>
                <ul>
                    <li>Other products or companies, that are mentioned on this website, could be trademarks registered by their own holder.</li>
                </ul>
            </div>
        );
    }
}

export default Disclaimer;