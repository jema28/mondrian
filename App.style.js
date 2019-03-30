import {createGlobalStyle} from 'styled-components'

export const theme = {
  red: '#CF231A',
  blue: '#054470',
  yellow: '#F1CC23',
  white: '#FFF',
  grey: '#D5DCE2',
  darkGrey: '#121315',
  black: '#06050B'
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Pangolin');

  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Pangolin', sans-serif;
    background: ${theme.darkGrey};
  }
`