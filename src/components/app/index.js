import React, { Component } from 'react'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import createStore from 'redux/store'
import routes from 'routes'
import './style.scss'

const store = createStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    )
  }
}

export default App
