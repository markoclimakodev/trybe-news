import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  margin-top: 2.4rem;
  padding: 0 0.8rem;
  max-width: 134.6rem;
  margin: 5.2rem auto;
`

export const CategoryContainer = styled.ul`
  background-color: var(--ice);
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  list-style: none;
  padding: 0.8rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 2.4rem;
  }
`

export const Category = styled.li`
  border-bottom: 1px solid var(--ice);
  display: flex;
  align-items: center;
  button {
    align-items: center;
    background-color: transparent;
    border: none;
    color: var(--text-color);
    display: flex;
    font-size: 1.2rem;
    font-weight: 600;
    justify-content: center;
    padding: 0.8rem;
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
  }

  @media screen and (min-width: 768px) {
    button {
      font-size: 1.6rem;
    }
  }

  &:hover {
    color: var(--accent-color);
    border-bottom: 1px solid var(--accent-color);
  }
`
