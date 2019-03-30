import styled from 'styled-components'

export const StyledPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 6px;

  width: 250px;
  background: ${props => props.theme.black};
  border: 1px solid black;
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
