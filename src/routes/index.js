import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home  from './pages/Home';

import '../Assets/css/styles.min.css';

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
);
