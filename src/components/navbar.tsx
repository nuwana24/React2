import React from "react";
import "../css/navbar.scss";
type Props = {};

const navbar = (props: Props) => {
  return (
    <>
      <nav className="nav__brand">
        <div className="me-auto left-links">
          <div className="nav__togglar">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav__menu">
            <li className="nav__item">
              <a id="nav-a" href="/" className="nav__link">
                Our Products
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/#" className="nav__link">
                FAQs
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a" href="/#" className="nav__link">
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="right-links">
          <li className="nav__item">
            <a id="nav-a" href="#" className="nav__link">
              Logout
            </a>
          </li>
        </div>
      </nav>
      <nav className="nav__brand2">
        <div className="me-auto left-links">
          <div className="nav__togglar">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className="nav__menu2">
            <li className="nav__item">
              <a id="nav-a2" href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Devices
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Orders
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Services
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Returns
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Contact Us
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Messages
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Profile
              </a>
            </li>
            <li className="nav__item">
              <a id="nav-a2" href="/#" className="nav__link">
                Email
              </a>
            </li>
          </ul>
        </div>
        
      </nav>
    </>
  );
};
export default navbar;
