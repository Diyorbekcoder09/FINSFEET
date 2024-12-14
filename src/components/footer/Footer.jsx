import "./Footer.css"
import { Link } from "react-router-dom"
import footer_logo from "../../assets/images/Logo.png"
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer_bg">
      <footer className="footer">
        <div className="footer_nav">
          <img src={footer_logo} alt="" className="footer_logo" />
          <div className="linklar">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
            <a href="https://www.facebook.com/">Privacy Policy</a>
          </div>

        </div>
        <div className="footer_card">
          <p className="footer_card_text">Subscribe to our news letter to get latest updates and news</p>
          <form className="footer_form">
            <input type="email" required placeholder="Enter Your Email" className="footer_input" />
            <button className="footer_btn">Subscribe</button>
          </form>
        </div>
        <div className="footer_link">
          <p className="footer_text">Finstreet 118 2561 Fintown
            <br /> Hello@finsweet.com  020 7993 2905</p>
          <div className="links">
            <a href="https://www.facebook.com/"><FaFacebook /></a>
            <a href="https://x.com/?lang=en"><FaTwitter /></a>
            <a href="https://www.instagram.com/"> <FaInstagram /></a>
            <a href="https://www.linkedin.com/"><IoLogoLinkedin /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer