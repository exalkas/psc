import React, { Component } from 'react';
import './css/styles.css';
import Routes from './routes';


import { BrowserRouter } from 'react-router-dom';
 
class App extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <BrowserRouter>
          <Routes />
      </BrowserRouter>
    );
  } 
}

export default App;
