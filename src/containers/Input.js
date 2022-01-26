import React from 'react'
import styled from '@emotion/styled'

import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'

const Wrapper = styled.div``

const Input = (props) => {
  const {
    code,
    interationCount,
    keySize,
    passphrase,
    iv,
    salt
  } = props.app;

  return (
    <Wrapper>
      <TextInput id='code' label='Code' type='text' {...props} value={code} />
      <TextInput id='interationCount' label='Interation Count' type='number' {...props} value={interationCount} />
      <TextInput id='keySize' label='Key Size' type='number' {...props} value={keySize} />
      <TextInput id='passphrase' label='Passphrase' type='text' {...props} value={passphrase} />
      <TextInput id='iv' label='IV' type='text' {...props} value={iv} />
      <TextInput id='salt' label='SALT' type='text' {...props} value={salt} />
      <TextArea id='data' label='Plain Text / Encrypted Text' type='text' {...props} />
    </Wrapper>
  )
}

export default Input
