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

export const Card = styled.article`
  background-color: var(--ice);
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.6rem;
  max-width: 28.5rem;
`

export const Heading = styled.h2`
  color: var(--text-color);
  font-size: 1.2rem;
  height: 5.6rem;
  overflow-y: auto;
  @media screen and (min-width: 768px) {
    font-size: 1.6rem;
  }
`
export const Intro = styled.p`
  font-size: 1.2rem;
  width: 100%;
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  span {
    color: var(--text-color);
    font-size: 1.4rem;
  }
`

export const Divider = styled.section`
  border-top: 1px solid var(--smoke);
  display: flex;
  justify-content: flex-end;
  padding-top: 0.8rem;
`
