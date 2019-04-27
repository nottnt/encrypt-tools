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
const TextAreaWrapper = styled.textarea`
  flex-grow: 1;
  height: 250px;
  resize: none;
  font-size: 15px;
`

class TextArea extends React.Component {
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
    const { label } = this.props
    return(
      <Wrapper>
        <LabelWrapper>{ label } : </LabelWrapper>
        <TextAreaWrapper value={ this.state.value } onChange={ this.handleChange } />
      </Wrapper>
    )
  }
}

export default TextArea