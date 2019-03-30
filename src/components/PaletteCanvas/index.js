import React, {Component} from 'react'
import {
  StyledPalette,
  Red,
  Yellow,
  Blue,
  Grey,
  White,
  DarkGrey
} from './palette.style'
import Canvas from '../Canvas'

class PaletteCanvas extends Component {
  state = {
    colorPicked: ''
  }

  getColor = event => {
    const backgroundColor = window
      .getComputedStyle(event.target, null)
      .getPropertyValue("background-color");
    this.setState({colorPicked: backgroundColor})
  }

  render() {
    return (
      <React.Fragment>
        <StyledPalette>
          <Red onClick={this.getColor}/>
          <Yellow onClick={this.getColor}/>
          <Blue onClick={this.getColor}/>
          <Grey onClick={this.getColor}/>
          <White onClick={this.getColor}/>
          <DarkGrey onClick={this.getColor}/>
        </StyledPalette>
        <Canvas colorPicked={this.state.colorPicked}/>
      </React.Fragment>
    )
  }
}

export default PaletteCanvas