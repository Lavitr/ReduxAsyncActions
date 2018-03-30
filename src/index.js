import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import './css/styles.css'
import App from "./components/App"


const middleware = [logger, thunk]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
)


