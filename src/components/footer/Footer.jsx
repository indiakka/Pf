import { NavLink } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <div className="footer-text">
          <p>Copyright © . Todos los derechos reservados.</p>
        </div>
        <div className="social-media-container">
          <NavLink
            className="social-media-icons"
            to="https://github.com/indiakka"
          >
            <i className=" fa-brands fa-github fa-xl"></i>
          </NavLink>
          <NavLink
            className="social-media-icons"
            to="https://www.linkedin.com/in/ziortzarl/"
          >
            <i className=" fa-brands fa-linkedin fa-xl"></i>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
