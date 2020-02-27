import React, { Component } from 'react';

class JoinPsc extends Component {

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
            <div>
                
            </div>
        );
    }
}

export default JoinPsc;