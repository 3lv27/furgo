import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect } from 'react-router-dom';

import Nav from './Nav';
import Details from './Details/Container/Details';
import Questions from './Questions/Questions';
import Offers from './Offers/Offers';
import NotFound from './NotFound';
import './App.css';

const App = ({ data }) => ( 
      <div className="App">
        <header className="header">
         <h2>Muebles</h2>
        </header>
        <BrowserRouter>
          <div className="wrapper">
            <div className="sub-menu">
              <Nav />
            </div>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/muebles/detalles" />)} />
              <Route exact path="/muebles" render={() => (<Redirect to="/muebles/detalles" />)} />
              <Route path="/muebles/detalles" render={() => <Details data={data} />} />
              <Route path="/muebles/preguntas" component={Questions} />
              <Route path="/muebles/ofertas" component={Offers} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>

       
      </div>
    );


export default App;
