import React from 'react'
import styled from '@emotion/styled'
import TypedJs from 'typed.js'

class Typed extends React.Component {
  componentDidMount() {
    var options = {
      strings: ['<a class="no-underline" href="https://github.com/AlphaDel" target="_blank">Design by Wuttinan</a>', '<a class="no-underline" href="https://github.com/AlphaDel" target="_blank">@AlphaDel</a>'],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 15000,
      smartBackspace: true,
      showCursor: false,
      loop: true,
    }
    this.typed = new TypedJs(this.el, options);
  }
  render() {
    return (
      <div style={{ textAlign: 'right', fontSize: '12px' }} ref={(el) => { this.el = el; }} />
    )
  }
}

export default Typed