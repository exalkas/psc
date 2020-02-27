import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './hoc/layout';
import HomePage from './components/Home';
import PageNotFound from './components/utils/page_not_found';
import NewsComponent from './components/News';
import ContactForm from './components/utils/contact_form';
import Disclaimer from './components/Disclaimer';
import ThePsc from './components/The_Psc';
import JoinPsc from './components/Join_Psc';
import PurchaseGuide from './components/Purchase_Guide';
import Buy from './components/Buy';
import TheFootballMarket from './components/The_Football_Market';
import WhoAreWe from './components/Who_are_we';

const Routes = () => {
  return(
    <MainLayout>
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/thepsc" exact component = {ThePsc} />
          <Route path="/joinpsc" exact component = {JoinPsc} />
          <Route path="/purchaseguide" exact component = {PurchaseGuide} />
          <Route path="/buy" exact component = {Buy} />
          <Route path="/thefootballmarket" exact component = {TheFootballMarket} />
          <Route path="/news" exact component = {NewsComponent} />
          <Route path="/whoarewe" exact component = {WhoAreWe} />
          <Route path="/contact" exact component = {ContactForm} />
          <Route path="/disclaimer" exact component = {Disclaimer} />
          {/* <Route path="/" exact><MainLayout><Route component = {HomePage} /></MainLayout></Route> */}
          <Route component = {PageNotFound}/>
        </Switch>
        </MainLayout>
  )
}

export default Routes;
