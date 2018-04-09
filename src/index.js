import React from 'react';
import ReactDOM from 'react-dom';
import './style_template.css';
import './next-icon/flat-icon.css';
import { Provider } from 'react-redux'; //← Bridge React and Redux
import { createStore } from 'redux'; // ← Main Redux library
// import {cognito} from 'react-cognito/src/reducers.js';
//
import Footer from './footer';
import Navigation from './navigation';
import Body from './body';
import Details from './details';
//
var BrowserRouter = require('react-router-dom').BrowserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;
var Switch = require('react-router-dom').Switch;

//Create Redux Store by passing it the reducers we created earlier.
let store = createStore(()=>{});


ReactDOM.render(
  <Provider store={store}>
    <div>
      <Navigation />
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Body} />
        <Route exact path='/' component={Details} />
     </Switch>
     </BrowserRouter>
     <Footer/>
    </div>
    </Provider>,
  document.getElementById('root')
);
