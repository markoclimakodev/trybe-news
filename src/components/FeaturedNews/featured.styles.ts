import styled from 'styled-components'

export const Container = styled.section`
  margin: auto;
  max-width: 134.6rem;
  position: relative;
  width: 100%;

  @media screen and (min-width: 768px) {
    align-items: center;
    display: flex;
    gap: 1.6rem;
    padding: 5.2rem 3.2rem 0;
    position: static;
  }
`

export const Image = styled.img`
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`

export const NewsInfoContainer = styled.section`
  background-color: var(--smoke-transparent);
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  position: absolute;
  width: 100%;

  @media screen and (min-width: 768px) {
    background-color: var(--ice);
    display: flex;
    height: fit-content;
    padding: 1.6rem;
    position: static;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    color: var(--accent-color);
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export const Heading = styled.h2`
  color: var(--text-color);
  font-size: 2rem;
`

export const Intro = styled.p`
  display: none;
  font-size: 1.4rem;
  width: 100%;

  @media screen and (min-width: 1280px) {
    display: block;
  }
`

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  span {
    color: var(--text-color);
    font-size: 1.4rem;
  }
`
