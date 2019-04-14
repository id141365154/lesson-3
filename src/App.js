import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Normalize } from 'styled-normalize'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createBrowserHistory } from 'history'

import { configureStore } from '@store/configureStore'
import { ThemeProvider, theme, GlobalStyles } from '@ui/theme'
import { SignIn, SignInConfirm, Exchange, SelectCountry, SelectTime } from '@ui/pages'
import { ConnectedRouter } from 'connected-react-router'
import { routes } from './routes'

const history = createBrowserHistory()
const { store, persistor } = configureStore(history)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            <ThemeProvider theme={theme}>
              <>
                <Normalize />
                <GlobalStyles />
                <Switch>
                  <Route path={routes.SIGN_IN} exact component={SignIn} />
                  <Route path={routes.CONFIRM} component={SignInConfirm} />
                  <Route path={routes.EXCHANGE} component={Exchange} />
                  <Route path={routes.SELECT_COUNTRY} component={SelectCountry} />
                  <Route path={routes.SELECT_TIME} component={SelectTime} />
                </Switch>
              </>
            </ThemeProvider>
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    )
  }
}

export default App
