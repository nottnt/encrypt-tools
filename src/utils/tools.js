
const CryptoJS = require("crypto-js")
const AES = require('crypto-js/aes')
const Base64 = require('crypto-js/enc-base64')
const Hex = require('crypto-js/enc-hex')
const PBKDF2 = require('crypto-js/pbkdf2')
const R = require('ramda')

export const encryptData = (param, code, { interationCount, keySize, passphrase, iv, salt } ) => {
  const saltHex = Hex.parse(salt)
  const key = PBKDF2(R.concat(passphrase, code), saltHex, { keySize: keySize, iterations: interationCount })
  const encrypted = AES.encrypt(param, key, { iv: Hex.parse(iv) })
  return Base64.stringify(encrypted.ciphertext)
}

// export const decryptData = () => {
//   const saltHex = Hex.parse(CONFIG.SALT)
//     const key = PBKDF2(R.concat(CONFIG.PASSPHRASE, code), saltHex, { keySize: CONFIG.KEY_SIZE, iterations: CONFIG.ITERATION_COUNT })
//     const cipherParams = CryptoJS.lib.CipherParams.create(
//       {
//         ciphertext: CryptoJS.enc.Base64.parse(cipherText)
//       }
//     )
    
//     const decrypted = AES.decrypt(cipherParams, key, { iv: Hex.parse(CONFIG.IV) })
//     return CryptoJS.enc.Utf8.stringify(decrypted)
// }

export const isNumber = value => {
  const regx = new RegExp(/^\d+$/)
  return regx.test(value)
}