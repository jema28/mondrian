import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.black};
  height: 500px;
  width: 500px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-gap: 8px;

  @media (max-width: 550px) {
    height: 55vh;
    width: 90vw;
  }
`
export const Section = styled.div`
  background: ${props => props.theme.white};

  :hover {
    cursor: pointer;
  }

  :nth-child(1) {
    grid-column: 1 / span 2;
    background: ${props => props.theme.grey};
  }

  :nth-child(2) {
    grid-column: span 3;
    background: ${props => props.theme.white};
  }

  :nth-child(3) {
    grid-column: span 2;
    background: ${props => props.theme.yellow};
  }

  :nth-child(4) {
    grid-column: span 1;
    grid-row: span 6;
    background: ${props => props.theme.grey};
  }

  :nth-child(5) {
    grid-row: span 2;
    background: ${props => props.theme.white};
  }

  :nth-child(6) {
    grid-column: span 4;
    grid-row: span 4;
    background: ${props => props.theme.red};
  }

  :nth-child(7) {
    grid-column: span 2;
    grid-row: span 2;
    background: ${props => props.theme.yellow};
  }

  :nth-child(8) {
    grid-row: span 3;
    background: ${props => props.theme.grey};
  }

  :nth-child(9),
  :nth-child(10) {
    grid-row: span 2;
    background: ${props => props.theme.white};
  }

  :nth-child(11) {
    grid-column: span 2;
    grid-row: span 2;
    background: ${props => props.theme.darkGrey};
  }

  :nth-child(12),
  :nth-child(15) {
    grid-column: span 2;
    background: ${props => props.theme.grey};
  }

  :nth-child(13) {
    grid-column: span 2;
    background: ${props => props.theme.white};
  }

  :nth-child(14) {
    grid-row: span 2;
    background: ${props => props.theme.yellow};
  }

  :nth-child(16) {
    grid-column: span 2;
    grid-row: span 2;
    background: ${props => props.theme.blue};
  }

  :nth-child(17) {
    grid-row: span 2;
    background: ${props => props.theme.red};
  }

  :nth-child(18) {
    grid-column: span 2;
    background: ${props => props.theme.white};
  }

  :nth-child(19) {
    grid-column: span 2;
    background: ${props => props.theme.darkGrey};
  }
`