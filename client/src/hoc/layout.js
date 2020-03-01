import React, { Component } from 'react';

import Header from '../components/Header_Footer/Header';
import Footer from '../components/Header_Footer/Footer';

/**
 * HOC to host header and footer
 */
class MainLayout extends Component {

    render() {
        return (
            <div className="layout">
                <Header/>
                <div className='bg'></div>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}


export default MainLayout;