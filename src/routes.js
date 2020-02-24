import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './hoc/layout';
import HomePage from './components/Home';
import PageNotFound from './components/utils/page_not_found';
import NewsComponent from './components/News';
import ContactForm from './components/utils/contact_form';

const Routes = () => {
  return(
    <MainLayout>
        <Switch>
          <Route path="/" exact component = {HomePage} />
          <Route path="/news" exact component = {NewsComponent} />
          <Route path="/contact" exact component = {ContactForm} />
          {/* <Route path="/" exact><MainLayout><Route component = {HomePage} /></MainLayout></Route> */}
          <Route component = {PageNotFound}/>
        </Switch>
        </MainLayout>
  )
}

export default Routes;
