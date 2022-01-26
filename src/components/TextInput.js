import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  // justify-content: flex-start;
  margin: 10px 0 10px 0;
`

const LabelWrapper = styled.label`
  padding-right: 10px;
  font-size: 18px;
  color: white;
  text-align: left;
  width: 150px;
`
const InputWrapper = styled.input`
  flex-grow: 1;
  width: 350px;
  height: 25px;
`

class TextInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: this.props.value || '' }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    if (e.target.validity.valid) {
      this.setState({ value: e.target.value })
      this.props.setValue(this.props.id, e.target.value)
    }
  }

  render() {
    const { label, type } = this.props
    // console.log('textInoput:', this.props)
    return(
      <Wrapper>
        <LabelWrapper>{ label } : </LabelWrapper>
        <InputWrapper type={ type } value={ this.state.value } onChange={ this.handleChange } />
      </Wrapper>
    )
  }
}

export default TextInput