import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 40px;
  text-align: center;
  margin-top: 40px;
  color: ${props => props.theme.white};

  @media (max-width: 600px) {
    font-size: 35px;
  }
`