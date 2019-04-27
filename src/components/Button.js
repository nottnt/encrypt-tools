import React from 'react'
import styled from '@emotion/styled'
import { FaLock, FaLockOpen } from 'react-icons/fa'

const Container = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
`
const ButtonWrapper = styled.button`
  height: 50px;
  width: 100%;
  font-size: 15px;
`
class Button extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({ value: e.target.value })
    this.props.setValue(this.props.id, e.target.value)
    
  }

  render() {
    const { styles, method, handleClick } = this.props
    return(
      <Container style={styles}>
        <ButtonWrapper className='brk-btn' onClick={ () => handleClick() }>
          { this.props.label }
        </ButtonWrapper>
      </Container>
    )
  }
}

export default Button