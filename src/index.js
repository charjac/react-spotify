import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'

import App from 'containers/App'
import Home from 'containers/Home'
import SearchResult from 'containers/SearchResult'
import Artist from 'containers/Artist'
import store from 'store'

const rootElem = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/search/:query" component={SearchResult} />
        <Route path="/artist/:id" component={Artist} />
      </Route>
    </Router>
  </Provider>
  , rootElem)
