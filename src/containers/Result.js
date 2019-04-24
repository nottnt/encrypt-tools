import React from 'react'
import styled from '@emotion/styled'

const Content =  styled.textarea`
  margin: 10px 0 10px 0;
  min-width: 490px;
  height: 515px;
  resize: none;
  font-size: 18px;
`
const Result = (props) => {
  console.log('!!!props: ', props)
  return (
    <Content readOnly value={ props.app.encrypted }></Content>
  )
}
export default Result
