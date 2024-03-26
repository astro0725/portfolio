import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-hsla-240-1-17-75 backdrop-blur-10 border border-jet rounded-t-lg shadow-2 z-5">
    <ul className="flex flex-wrap justify-center items-center px-10">
      <li className="navbar-item">
        <NavLink to="/" className="text-white text-fs-8 px-7 py-20 transition-colors duration-300 hover:text-tertiary focus:text-tertiary active:text-primary" data-nav-link>
          About
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/resume" className="text-white text-fs-8 px-7 py-20 transition-colors duration-300 hover:text-tertiary focus:text-tertiary active:text-primary" data-nav-link>
          Resume
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/portfolio" className="text-white text-fs-8 px-7 py-20 transition-colors duration-300 hover:text-tertiary focus:text-tertiary active:text-primary" data-nav-link>
          Portfolio
        </NavLink>
      </li>

      <li className="navbar-item">
        <NavLink to="/contact" className="text-white text-fs-8 px-7 py-20 transition-colors duration-300 hover:text-tertiary focus:text-tertiary active:text-primary" data-nav-link>
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar