import React from 'react'
import PaletteCanvas from '../PaletteCanvas'
import {StyledMondrian, Title} from './mondrian.style'

const Mondrian = () => (
  <StyledMondrian>
    <Title>Pick and paint!</Title>
    <PaletteCanvas/>
  </StyledMondrian>
)

export default Mondrian