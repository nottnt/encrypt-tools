import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export default function (initialState={}) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  )
  window.store = store
  return store
}