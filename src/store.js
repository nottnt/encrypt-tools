import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export default function (initialState = {}) {
  const constantKeyValue = {
    CODE: 'appman',
    ITERATION_COUNT: 300,
    KEY_SIZE: 128 / 32,
    PASSPHRASE: 'Dn@Az@yUx30016#',
    IV: 'F27D5C9927726BCEFE7510B1BDD3D137',
    SALT: '3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55'
  }
  const store = createStore(
    rootReducer,
    {
      ...initialState,
      app: {
        code: 'appman',
        interationCount: 300,
        keySize: 128 / 32,
        passphrase: 'Dn@Az@yUx30016#',
        iv: 'F27D5C9927726BCEFE7510B1BDD3D137',
        salt: '3FF2EC019C627B945225DEBAD71A01B6985FE84C95A70EB132882F88C0A59A55'
      }
    },
    applyMiddleware(thunk)
  )
  window.store = store
  return store
}