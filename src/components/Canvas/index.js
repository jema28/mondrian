import React, {Component} from 'react'
import {Container, Section} from './canvas.style'

class Canvas extends Component {
  state = {
    bgColor: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
  }

  canvasBlockClick = element => {
    const addColortoStateObj = [
      ...this.state.bgColor.slice(0, element),
      this.props.colorPicked,
      ...this.state.bgColor.slice(element + 1)
    ]
    this.setState({bgColor: addColortoStateObj})
  }

  render() {
    return (
      <Container>
        <Section
          style={{
          backgroundColor: this.state.bgColor[0]
        }}
          onClick={() => this.canvasBlockClick(0)}/>
        <Section  style={{
          backgroundColor: this.state.bgColor[1]
        }}
          onClick={() => this.canvasBlockClick(1)} />
        <Section style={{
          backgroundColor: this.state.bgColor[2]
        }}
          onClick={() => this.canvasBlockClick(2)} />
        <Section style={{
          backgroundColor: this.state.bgColor[3]
        }}
          onClick={() => this.canvasBlockClick(3)} />
        <Section style={{
          backgroundColor: this.state.bgColor[4]
        }}
          onClick={() => this.canvasBlockClick(4)} />
        <Section style={{
          backgroundColor: this.state.bgColor[5]
        }}
          onClick={() => this.canvasBlockClick(5)} />
        <Section style={{
          backgroundColor: this.state.bgColor[6]
        }}
          onClick={() => this.canvasBlockClick(6)} />
        <Section style={{
          backgroundColor: this.state.bgColor[7]
        }}
          onClick={() => this.canvasBlockClick(7)} />
        <Section style={{
          backgroundColor: this.state.bgColor[8]
        }}
          onClick={() => this.canvasBlockClick(8)} />
        <Section style={{
          backgroundColor: this.state.bgColor[9]
        }}
          onClick={() => this.canvasBlockClick(9)} />
        <Section  style={{
          backgroundColor: this.state.bgColor[10]
        }}
          onClick={() => this.canvasBlockClick(10)}/>
        <Section style={{
          backgroundColor: this.state.bgColor[11]
        }}
          onClick={() => this.canvasBlockClick(11)} />
        <Section style={{
          backgroundColor: this.state.bgColor[12]
        }}
          onClick={() => this.canvasBlockClick(12)} />
        <Section style={{
          backgroundColor: this.state.bgColor[13]
        }}
          onClick={() => this.canvasBlockClick(13)} />
        <Section style={{
          backgroundColor: this.state.bgColor[14]
        }}
          onClick={() => this.canvasBlockClick(14)} />
        <Section style={{
          backgroundColor: this.state.bgColor[15]
        }}
          onClick={() => this.canvasBlockClick(15)}/>
        <Section style={{
          backgroundColor: this.state.bgColor[16]
        }}
          onClick={() => this.canvasBlockClick(16)} />
        <Section style={{
          backgroundColor: this.state.bgColor[17]
        }}
          onClick={() => this.canvasBlockClick(17)} />
        <Section style={{
          backgroundColor: this.state.bgColor[18]
        }}
          onClick={() => this.canvasBlockClick(18)} />
      </Container>
    )
  }

}

export default Canvas