import React from 'react'
import {Auth0Provider} from '@auth0/auth0-react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain='sourav-paul-557.us.auth0.com'
      clientId='4642f5xE6mzp8K16NAavRqat446PrpPa'
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
