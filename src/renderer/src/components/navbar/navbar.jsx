import { NavbarStyled } from './navbar-styled'
import { FaSearch } from 'react-icons/fa'

export const Navbar = () => {
  return (
    <NavbarStyled>
      <div className="navbar-logo">
        <input type="text" placeholder='Buscar' />

        <FaSearch cursor={'pointer'} />


      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Añadir Producto</a>
        </li>
        <li>
          <a href="/about">Reportes</a>
        </li>
        <li>
          <a href="/services">Configuración</a>
        </li>
      </ul>
    </NavbarStyled>
  )
}
