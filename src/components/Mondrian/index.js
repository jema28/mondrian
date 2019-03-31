import React from 'react'
import PaletteCanvas from '../PaletteCanvas'
import {Title} from './mondrian.style'

const Mondrian = () => (
  <React.Fragment>
    <Title>Pick and paint!</Title>
    <PaletteCanvas/>
  </React.Fragment>
)

export default Mondrian