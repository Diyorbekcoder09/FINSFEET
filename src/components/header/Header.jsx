import "./Header.css"
import header_logo from "../../assets/images/Logo.png"

import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="container">

      <div className="header_color">

        <header className="header">
          <img src={header_logo} alt="" className="header_logo" />
          <div className="linklar">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <button className="header_btn">Subscribe</button>
          </div>
        </header>
      </div>





    </div>
  )
}

export default Header