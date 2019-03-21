import styled from 'styled-components'

export const Container = styled.div`
  background: #0f0f0f;
  height: 75vh;
  width: 95vh;
  margin: 0 auto;
  border: 1px solid #0f0f0f;

  display: grid;
  grid-template-rows: 1fr 3fr 0.6fr 1.5fr;
  grid-template-columns: 1.5fr 4fr 0.6fr 1.6fr;
  grid-gap: 3px;

  @media(max-width: 550px) {
    height: 45vh;
    width: 90vw;
  }
`
export const Section = styled.div`
  background: white;
`