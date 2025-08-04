import { NavLink } from "react-router-dom"

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <NavLink className="nav-link" to="/home">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/fontSizer">
        Font Sizer
      </NavLink>
      <NavLink className="nav-link" to="/textAlign">
        Text Align
      </NavLink>
      <NavLink className="nav-link" to="/counter">
        Counter
      </NavLink>
      <NavLink className="nav-link" to="/clock">
        Clock
      </NavLink>
      <NavLink className="nav-link" to="/weather">
        Weather
      </NavLink>
      <NavLink className="nav-link" to="/colorChanger">
        Color Changer
      </NavLink>
      <NavLink className="nav-link" to="/rgbSlider">
        RGB Slider
      </NavLink>
    </div>
  )
}
