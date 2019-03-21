import '@babel/polyfill'

import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import configureStore from './store/configureStore'
import reducer from './reducers'
import rootSaga from './sagas'
import App from './containers/App'

const store = configureStore()
store.runSaga(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
