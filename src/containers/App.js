import React from 'react'
import styled from '@emotion/styled'
import { connect } from 'react-redux'
import './App.css';
import Result from './Result'
import Input from './Input'
import Button from '../components/Button'
import { setValue } from '../actions/action'
import { encrypt, decrypt } from '../utils/encryption'

const ContainerWrapper = styled.div`
  // overflow: hidden;
  margin: 1em 0;
  background: #1c92d2;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #1c92d2, #f2fcfe);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #1c92d2, #f2fcfe); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

const App = (props) => {
  console.log('app: ', props)
  return (
    <div className="App">
      <div className="App-Detail">
        <ContainerWrapper>
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
