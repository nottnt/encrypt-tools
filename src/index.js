import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import Analytics from 'react-router-ga'

import configureStore from './store'
import './index.css'
import App from './containers/App'
import * as serviceWorker from './serviceWorker'


const AppWithRouter = () => (
  <HashRouter>
    <Analytics id='UA-139126654-1'>
      <App />
    </Analytics>
  </HashRouter>
)

ReactDOM.render(
  <Provider store={configureStore()}>
    <AppWithRouter />
  </Provider>, 
  document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
