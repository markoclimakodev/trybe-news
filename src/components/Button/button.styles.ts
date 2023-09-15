import styled from 'styled-components'

export const ReadNewsButton = styled.button`
  background-color: var(--button-color);
  border: none;
  border-radius: 0.2rem;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.04rem;
  line-height: 1.2rem;
  padding: 0.8rem;
  transition: all 350ms ease-in-out;

  a {
    color: var(--text-color);
    text-decoration: none;
  }

  &:hover {
    background-color: var(--button-hover-color);
    cursor: pointer;
  }
`

export const MoreNewsButton = styled.button`
  background-color: transparent;
  border: 0.1rem solid var(--accent-color);
  border-radius: 0.4rem;
  color: var(--accent-color);
  font-size: 1.2rem;
  font-weight: 500;
  padding: 1.6rem 3.6rem;
  transition: all 500ms ease-in-out;

  &:hover {
    background-color: var(--accent-color);
    color: var(--ice);
    cursor: pointer;
  }
`
