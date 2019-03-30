import React from 'react'
import {ThemeProvider} from 'styled-components'
import {GlobalStyle, theme} from './App.style'
import Mondrian from './src/components/Mondrian'

const App = () => (
  <React.Fragment>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Mondrian/>
    </ThemeProvider>
  </React.Fragment>
)

export default App