import React from 'react'
import styled from '@emotion/styled'

import TextInput from '../components/TextInput'
import TextArea from '../components/TextArea'

const Wrapper = styled.div``

const Input = (props) => {
  return (
    <Wrapper>
      <TextInput id='code' label='Code' type='string' { ...props } />
      <TextInput id='interationCount' label='Interation Count' type='number' { ...props } />
      <TextInput id='keySize' label='Key Size' type='number' { ...props } />
      <TextInput id='passphrase' label='Passphrase' type='string' { ...props } />
      <TextInput id='iv' label='IV' type='string' { ...props } />
      <TextInput id='salt' label='SALT' type='string' { ...props } />
      <TextArea id='planText' label='Plan Text' type='string' { ...props } />
    </Wrapper>
  )
}

export default Input
