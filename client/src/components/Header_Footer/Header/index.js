/**
 * Header for User dashboard
 */
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dropdown from 'react-dropdown';
import Popover from '@material-ui/core/Popover';
import 'react-dropdown/style.css';

import { FaGlobe } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../../Resources/logo.webp';

import { MENU } from '../../../Resources/Constants/Texts/menu';

class Header extends Component {

    languageChanged = new Event('langChanged');

    state = {
        menu: {},
        options: ["EN", "DE"],
        ddValue: '',
        locale: 'en',
        ddMenuOpen: false,
        ddBurgerOpen: false,
        anchorElement: null,
        anchorElementDD: null,
        windowWidth: 0
    }

    componentDidMount(){
        window.addEventListener('resize', this.handleWindowResize);
        // console.log('HANDLE ON SELECT: MENU=', MENU)
        this.setState({
            menu: MENU,
            windowWidth: window.size
        });

        this.handleLocale('first loading');

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
      }

    handleBurgerMenuOpen = e => {
        this.setState({
            ddBurgerOpen: true,
            anchorElement: e.currentTarget
        })
    }

    handleBurgerMenuClose = () => {
        this.setState({
            ddBurgerOpen: false
        })
    }

    handleDDMenuClose = () => {
        this.setState({
           ddMenuOpen:false
        });
    }

    handleDDMenuOpen = e => {
        this.setState({
            ddMenuOpen: true,
            anchorElementDD: e.currentTarget
        });
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

    handleOnSelect = e => {
        console.log('HANDLE ON SELECT: e=', e.value.toLowerCase())
        this.handleLocale(e.value.toLowerCase());
        document.dispatchEvent(this.languageChanged);
        this.handleWindowResize()
    }

    handleWindowResize = () => {
        // console.log('HANDLE WINDOW RESIZE: size=', window.innerWidth);
        this.setState({windowWidth: window.innerWidth})
    }

    render() {
        return (
            <div className="header_container"  id='headerElement'>
                
                <div className='logo'><Link to='/'><img src={logo} alt='Pro Sport Coin Logo'/></Link></div>
                <div className='menu_wrapper'>
                   {
                       this.state.windowWidth > 900 ? 
                       <div className='menu_container'>
                           {console.log('HANDLE WINDOW RESIZE: wiindow > 600')}
                           <Link to='/'>{MENU.home[this.state.locale]}</Link>
                           <Link to='/'>{MENU.thePSC[this.state.locale]}</Link>
                           <Link to='/'>{MENU.joinPSC[this.state.locale]}</Link>
                           <Link to='/'>{MENU.purchaseGuide[this.state.locale]}</Link>
                           <Link to='/'>{MENU.buy[this.state.locale]}</Link>
                           <Link to='/'>{MENU.theFootbalMarket[this.state.locale]}</Link>
                           <Link to='/news'>{MENU.news[this.state.locale]}</Link>
                           
                           <div className='ddHeader' onClick={e => this.handleDDMenuOpen(e)}>
                               {MENU.more[this.state.locale]}</div>
                               {this.state.ddMenuOpen && (
                               <Popover
                                   anchorEl={this.state.anchorElementDD}
                                   open={this.state.ddMenuOpen}
                                   onClose={this.handleDDMenuClose}
                                   anchorOrigin={{
                                       vertical: 'bottom',
                                       horizontal: 'center',
                                   }}
                                   transformOrigin={{
                                       vertical: 'top',
                                       horizontal: 'center',
                                   }}
                                   style={{
                                       width: '20rem',
                                       height: '10rem'
                                   }}
                               >
                                   <div className="ddMenuContainer" >
                                       <ul>
                                           <li className ='menu_li_item'><Link to='/'>{MENU.whoAreWe[this.state.locale]}</Link></li>
                                           <li className ='menu_li_item'><Link to='/contact'>{MENU.contactUs[this.state.locale]}</Link></li>
                                           <hr />
                                           <li className ='menu_li_item'><Link to='/contact'>{MENU.disclaimer[this.state.locale]}</Link></li>
                                       </ul>
                                   </div>
                               </Popover>
                               )}                        
                           
           
                       </div>
                       
                   :
                       <div className='menu_container_burger'>
                           {console.log('HANDLE WINDOW RESIZE: wiindow < 600')}
                           <button type="button" className="button" onClick={e => this.handleBurgerMenuOpen(e)}><GiHamburgerMenu /></button>
                           {this.state.ddBurgerOpen && (
                           <Popover
                               anchorEl={this.state.anchorElement}
                               open={this.state.ddBurgerOpen}
                               onClose={this.handleBurgerMenuClose}
                               anchorOrigin={{
                                   vertical: 'bottom',
                                   horizontal: 'center',
                               }}
                               transformOrigin={{
                                   vertical: 'top',
                                   horizontal: 'center',
                               }}
                           >
                               <div className="ddBurgerMenuContainer" >
                                   <ul>
           
                                       <li className ='menu_li_item'><Link to='/'>{MENU.home[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/'>{MENU.thePSC[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/'>{MENU.joinPSC[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/'>{MENU.purchaseGuide[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/'>{MENU.buy[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/'>{MENU.theFootbalMarket[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/news'>{MENU.news[this.state.locale]}</Link></li>
           
                                       <hr />
                                       <li className ='menu_li_item'><Link to='/'>{MENU.whoAreWe[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/contact'>{MENU.contactUs[this.state.locale]}</Link></li>
                                       <li className ='menu_li_item'><Link to='/contact'>{MENU.disclaimer[this.state.locale]}</Link></li>
                                   </ul>
                               </div>
                           </Popover>
                           )}     
                       </div>
                   }
                
                <div className='language_selector_container' >
                    <div className="lang_icon"><FaGlobe/></div>
                    <Dropdown options={this.state.options} onChange={this.handleOnSelect} value={this.state.ddValue} placeholder="Select an option" />
                </div>
                </div>
                <ToastContainer autoClose={3000} />
            </div>
        );
    }
}

export default Header;