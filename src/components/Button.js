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
  border-radius: 5px;
`

const Icon = styled.span`
  padding-right: 10px;
  font-size: 15px;
`
const Label = styled.span`
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
        <ButtonWrapper onClick={ () => handleClick() }>
          <Icon>
            {
              method === 'encrypt' ? <FaLock /> : <FaLockOpen />
            }
          </Icon>
          <Label>{ this.props.label }</Label>
        </ButtonWrapper>
      </Container>
    )
  }
}

export default Button