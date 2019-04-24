import React from 'react'
import styled from '@emotion/styled'

import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'

const Wrapper = styled.div``

const Input = (props) => {
  return (
    <Wrapper>
      <TextInput id='code' label='Code' type='text' { ...props } />
      <TextInput id='interationCount' label='Interation Count' type='number' { ...props } />
      <TextInput id='keySize' label='Key Size' type='number' { ...props } />
      <TextInput id='passphrase' label='Passphrase' type='text' { ...props } />
      <TextInput id='iv' label='IV' type='text' { ...props } />
      <TextInput id='salt' label='SALT' type='text' { ...props } />
      <TextArea id='planText' label='Plan Text' type='text' { ...props } />
    </Wrapper>
  )
}

export default Input
