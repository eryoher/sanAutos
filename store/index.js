import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../reducers'
import rootSaga from '../sagas/index'
import configureAxios from '../lib/AxiosInterceptors'

const sagaMiddleware = createSagaMiddleware()

let store;

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export function configureStore() {
  store = createStore(
    reducers,
    bindMiddleware([sagaMiddleware])
  )

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga)
  }

  store.runSagaTask()

  configureAxios(store);

  return store
}

export function getStore() {
  return store;
}

export default configureStore;