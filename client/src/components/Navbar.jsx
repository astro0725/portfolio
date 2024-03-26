import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="items-center text-white">
      <nav className="bg-base p-4 text-gray-300 rounded-lg">
      <ul className="flex flex-wrap justify-center items-center px-10">
        <li>
          <NavLink to="/" className="text-white text-sm px-7 py-10 transition-colors duration-300 hover:text-tertiary focus:text-primary active:text-primary" data-nav-link>
            About
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" className="text-white text-sm px-7 py-10 transition-colors duration-300 hover:text-tertiary focus:text-primary active:text-primary" data-nav-link>
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className="text-white text-sm px-7 py-10 transition-colors duration-300 hover:text-tertiary focus:text-primary active:text-primary" data-nav-link>
            Portfolio
          </NavLink>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar