import styled from 'styled-components'

export const StyledPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 6px;

  width: 336px;
  background: ${props => props.theme.black};
  border: 1px solid black;
  margin: 0 auto;
  margin-bottom: 30px;
`

export const Red = styled.div`
  background: ${props => props.theme.red};
  height: 50px;
  width: 50px;

  :hover {
    cursor: pointer;
  }
`
export const Blue = styled(Red)`
  background: ${props => props.theme.blue};
`
export const Yellow = styled(Red)`
  background: ${props => props.theme.yellow};
`
export const Grey = styled(Red)`
  background: ${props => props.theme.grey};
`
export const White = styled(Red)`
  background: ${props => props.theme.white};
`
export const DarkGrey = styled(Red)`
  background: ${props => props.theme.darkGrey};
  border: 1px solid #41454c;
  box-sizing: border-box;
`
