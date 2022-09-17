import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Select from '../Select/Select';
import Form from '../Form/Form';
import Checkout from '../Checkout/Checkout';
import Admin from '../Admin/Admin';

function App() {

  return (
    
    <div className='App'>
      <Router>
        <Header />
        <Route exact path="/">
          <Select />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Router>
    </div>
  );
}

export default App;
