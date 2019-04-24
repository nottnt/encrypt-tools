import CryptoJS from 'crypto-js'
import AES from 'crypto-js/aes'
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'
import PBKDF2 from 'crypto-js/pbkdf2'
import * as R from 'ramda'
import { setValue } from '../actions/action'

export default () => {
  return async (dispatch, getState) => {
    console.log(getState())
    const state = getState()
    const { planText, code, interationCount, keySize, passphrase, iv, salt } = state.app
    const saltHex = Hex.parse(salt)
    const key = PBKDF2(R.concat(passphrase, code), saltHex, { keySize: keySize, iterations: interationCount })
    const encrypted = AES.encrypt(planText, key, { iv: Hex.parse(iv) })
    const x  = Base64.stringify(encrypted.ciphertext)
    console.log('encrypted: ', x)
    dispatch(setValue('encrypted', Base64.stringify(encrypted.ciphertext)))
  }
}