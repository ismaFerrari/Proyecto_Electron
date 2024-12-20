import styled from 'styled-components'

export const NavbarStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Línea de separación */
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease; /* Suaviza transiciones */

  &:hover {
    background-color: #444; /* Cambio de color al pasar el mouse */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); /* Sombra más grande */
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 5px;

    input {
      padding: 5px;
      border: none;
      border-radius: 5px;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      transition: box-shadow 0.3s ease;
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 20px;

    a {
      color: #fff;
      text-decoration: none;
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #f4a261; /* Color del texto al pasar el mouse */
      text-decoration: underline; /* Subraya al pasar el mouse */
    }
  }
`
