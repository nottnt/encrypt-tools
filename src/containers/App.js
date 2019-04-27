import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import './App.css'
import './App.scss'
import Typed from '../components/Typed'
import Result from './Result'
import Input from './Input'
import Button from '../components/Button'
import { setValue } from '../actions/action'
import { encrypt, decrypt } from '../utils/encryption'

const ContainerWrapper = styled.div`
  border-radius: 10px;
  padding: 10px;
  background: linear-gradient(135deg, #313b53 0%,#213037 100%);
  -webkit-box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 54px 16px rgba(0,0,0,0.75);
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  margin-left: 10px;
  margin-right: 10px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;  
`

const Title = styled.p`
  font-size: 18px;
  color: white;
`

const App = (props) => {
  return (
    <div className="App">
      <div className="App-Detail">
        <ContainerWrapper>
          <Row>
            <Column>
              <Title>Advanced Encryption Standard(AES)</Title>
            </Column>
          </Row>
          <Row>
            <Column>
              <Input style={{ color: 'red'}} { ...props } />
              <ButtonWrapper>
                <Button label='Encrypt' borderColor='green' handleClick={ () => props.encryptFn() } method='encrypt' { ...props } />
                <Button label='Decrypt' borderColor='red' styles={{marginLeft: '10px'}} handleClick={ () => props.decryptFn() }  method='decrypt' { ...props } />
                {/* <Button styles={{marginLeft: '10px'}} label='Clear' method='clear' { ...props } /> */}
              </ButtonWrapper>
            </Column>
            <Column>
              <Result { ...props } />
              <Typed />
            </Column>
          </Row>
        </ContainerWrapper>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => ({
  setValue: (fieldId, value) => dispatch(setValue(fieldId, value)),
  encryptFn: () => { 
    dispatch(setValue('result', 'encrypting...'))
    setTimeout( () => { 
      dispatch(encrypt())
    }, 1000)
    
  },
  decryptFn: () => {
    dispatch(setValue('result', 'decrypting...'))
    setTimeout( () => { 
      dispatch(decrypt())
    }, 1000)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
