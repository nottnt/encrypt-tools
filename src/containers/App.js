import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import './App.css';
import Typed from '../components/Typed'
import Result from './Result'
import Input from './Input'
import Button from '../components/Button'
import { setValue } from '../actions/action'
import { encrypt, decrypt } from '../utils/encryption'

const ContainerWrapper = styled.div`
  background: linear-gradient(90deg, #4df3c9, #b9b2f2, #a8f5c3);
  background-size: 600% 600%;

  -webkit-animation: AnimationName 40s ease infinite;
  -moz-animation: AnimationName 40s ease infinite;
  -o-animation: AnimationName 40s ease infinite;
  animation: AnimationName 40s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @-o-keyframes AnimationName {
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  @keyframes AnimationName { 
      0%{background-position:0% 51%}
      50%{background-position:100% 50%}
      100%{background-position:0% 51%}
  }
  border-radius: 2px;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(9,0,0,0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
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
                <Button label='Encrypt' handleClick={ () => props.encryptFn() } method='encrypt' { ...props } />
                <Button styles={{marginLeft: '10px'}} handleClick={ () => props.decryptFn() } label='Decrypt' method='decrypt' { ...props } />
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
