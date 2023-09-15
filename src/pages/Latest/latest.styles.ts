import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
  width: 100%;
  padding-bottom: 2.4rem;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 80%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`
