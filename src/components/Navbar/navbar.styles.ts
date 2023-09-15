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
  gap: 1.2rem;
  justify-content: center;
  list-style: none;
  padding: 0.8rem;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 2.4rem;
  }
`

export const Category = styled.li`
  a {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 600;
    padding-bottom: 0.8rem;
    text-decoration: none;
  }

  @media screen and (min-width: 768px) {
    a {
      font-size: 1.6rem;
    }
  }

  &:hover {
    a {
      border-bottom: 1px solid var(--accent-color);
      color: var(--accent-color);
    }
  }
`
