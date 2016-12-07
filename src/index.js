import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'

import App from './App';
import Home from './Home'
import Category from './Category'

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route component={ App }>
      <Route path='/' component={ Home } />
      <Route path={ 'category/:category' } component={ Category }/>
    </Route>
  </Router>,
  document.getElementById('root')
)
