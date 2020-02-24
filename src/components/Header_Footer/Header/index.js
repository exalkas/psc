/**
 * Header for User dashboard
 */
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import { FaGlobe } from 'react-icons/fa';

import logo from '../../../Resources/logo.webp';

import { MENU } from '../../../Resources/Constants/Texts/menu';

class Header extends Component {

    languageChanged = new Event('langChanged');

    state = {
        menu: {},
        options: ["EN", "DE"],
        ddValue: '',
        locale: 'en'
    }

    componentDidMount(){
        // console.log('HANDLE ON SELECT: MENU=', MENU)
        this.setState({menu: MENU});

        this.handleLocale('first loading');
    }

    handleOnSelect = e => {
        console.log('HANDLE ON SELECT: e=', e.value.toLowerCase())
        this.handleLocale(e.value.toLowerCase());
        document.dispatchEvent(this.languageChanged);
    }


    handleLocale = e => {

        let locale;
        console.log('HEADER: Handle locale: e=', e);

        if (e !== 'first loading') { // It's not first time that component is loading
            
            if (!this.state.options.includes(e.toUpperCase())) {
                locale = 'en';
            } else {
                localStorage.setItem('lang_pref', e);
                locale = e;
            }

        } else { // FIRST LOADING - this is the first time the component is loading

            locale = localStorage.getItem('lang_pref'); 
            console.log('HANDLE LOCALE: this is locale from get item=', locale)

            if (!locale) { // locale is null
                if (navigator.languages && navigator.languages.length) {
                    locale = navigator.languages[0];
                    console.log('HEADER: LOCALE DETECTION=', navigator.languages[0]);
                } else {
    
                    locale = navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en'
    
                    console.log('HEADER: LOCALE DETECTION=', navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en');
                }
    
                if (!this.state.options.includes(locale.toUpperCase())) {
                    locale = 'en'
                    localStorage.setItem('lang_pref', 'en');
                } 
                // else {
                //     localStorage.setItem('lang_pref', locale.split('-')[0]);
                // }

        } else { // There is value in local storage
            if (locale && !this.state.options.includes(locale.toUpperCase())) {
                locale = 'en';
                localStorage.setItem('lang_pref', 'en');
                console.log('HANDLE LOCALE: first Time locale=', locale)
            }
            
        }
    }
        console.log('HEADER: Handle locale at the end: e=', e, ' locale=', locale);
        this.setState({locale, ddValue: locale.toUpperCase()});
    }

    render() {
        return (
            <div className="header_container">
                <Navbar bg="transparent" expand="md">
                    <Navbar.Brand href="#home"><img src={logo} alt='Pro Sport Coin'/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        {/* <Nav.Link href="#home">{this.state.menu.home[this.state.locale]}</Nav.Link> */}
                        <Nav.Link href="/">{MENU.home[this.state.locale]}</Nav.Link>
                        <Nav.Link href="#link">{MENU.thePSC[this.state.locale]}</Nav.Link>
                        <Nav.Link href="#link">{MENU.joinPSC[this.state.locale]}</Nav.Link>
                        <Nav.Link href="#link">{MENU.purchaseGuide[this.state.locale]}</Nav.Link>
                        <Nav.Link href="#link">{MENU.buy[this.state.locale]}</Nav.Link>
                        <Nav.Link href="#link">{MENU.theFootbalMarket[this.state.locale]}</Nav.Link>
                        <Nav.Link href="/news">{MENU.news[this.state.locale]}</Nav.Link>
                        <NavDropdown title={MENU.more[this.state.locale]} id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.2">{MENU.whoAreWe[this.state.locale]}</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">{MENU.contactUs[this.state.locale]}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">{MENU.disclaimer[this.state.locale]}</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className='language_selector_container'>
                    <div className="lang_icon"><FaGlobe/></div>
                    <Dropdown options={this.state.options} onChange={this.handleOnSelect} value={this.state.ddValue} placeholder="Select an option" />
                </div>
            </div>
        );
    }
}

export default Header;