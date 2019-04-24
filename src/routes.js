import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import App from './containers/App'

export default () => (
  <HashRouter>
    <App>
      <Route exact path="/" component={App} />
    </App>
  </HashRouter>
)