import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import { BrowserRouter, Route } from 'react-router-dom';



ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </App>
  </BrowserRouter>
), document.getElementById('app'));
