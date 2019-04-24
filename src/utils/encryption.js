import CryptoJS from 'crypto-js'
import AES from 'crypto-js/aes'
import Base64 from 'crypto-js/enc-base64'
import Hex from 'crypto-js/enc-hex'
import PBKDF2 from 'crypto-js/pbkdf2'
import * as R from 'ramda'
import { setValue } from '../actions/action'

export const encrypt = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { data = '', code = '', interationCount = 0, keySize = 0, passphrase = '', iv = '', salt = '' } = state.app

    try {
      const saltHex = Hex.parse(salt)
      const key = PBKDF2(R.concat(passphrase, code), saltHex, { keySize: keySize, iterations: interationCount })
      const encrypted = AES.encrypt(data, key, { iv: Hex.parse(iv) })
      dispatch(setValue('result', Base64.stringify(encrypted.ciphertext)))
    } catch (error) {
      dispatch(setValue('result', `Error encryption: ${error}`))
    }
  }
}

export const decrypt = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const { data = '', code = '', interationCount = 0, keySize = 0, passphrase = '', iv = '', salt = '' } = state.app

    try {
      const saltHex = Hex.parse(salt)
      const key = PBKDF2(R.concat(passphrase, code), saltHex, { keySize: keySize, iterations: interationCount })
      const cipherParams = CryptoJS.lib.CipherParams.create(
        {
          ciphertext: CryptoJS.enc.Base64.parse(data)
        }
      )
      const decrypted = AES.decrypt(cipherParams, key, { iv: Hex.parse(iv) })
      dispatch(setValue('result', CryptoJS.enc.Utf8.stringify(decrypted)))
    } catch (error) {
      dispatch(setValue('result', `Error decryption: ${error}`))
    }
  }
}