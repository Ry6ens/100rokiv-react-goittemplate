import { NavLink } from "react-router-dom";

import "./hamburgers.scss";
import "./Burger.scss";

import Navigation from "../../Navigation/Navigation";

export default function Burger() {
  const handleClick = ({ target, currentTarget }) => {
    if (target.nodeName === "UL") {
      return;
    }
    currentTarget.classList.toggle("is-active");
    document.body.classList.toggle("no-scroll");
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const getClassName = ({ isActive }) => {
    return isActive ? "activeLink" : "link";
  };

  return (
    <>
      <div
        className="hamburger hamburger--squeeze"
        type="button"
        onClick={handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
        <div className="hamburger-menu_nav">
          <Navigation navClass="hamburger-menu_list" onClick="scrollTop" />
          <div className="hamburger-menu_mobile">
            <ul className="hamburger-menu_list">
              <li >
                <a
                  href="https://www.instagram.com/100rokivtomuvpered/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li >
                <a
                  href="https://www.facebook.com/100rokivtomuvpered"
                  rel="noreferrer"
                  target="_blank"
                >
                  Facebook
                </a>
              </li>
              <li >
                <NavLink to="/privacy-policy" className={getClassName}  onClick={scrollTop}>
                  Політика конфіденційності
                </NavLink>
              </li>
              <li >
                <NavLink to="/public-offer" className={getClassName}  onClick={scrollTop}>
                  Публічна оферта
                </NavLink>
              </li>
            </ul>
            <address className="hamburger-address_item">
              <a
                href="https://goo.gl/maps/Jof1XhNqpWWVxGcu6"
                rel="noreferrer"
                target="_blank"
              >
                вул. Володимирська 4, м. Київ
              </a>
            </address>
            <a className="hamburger-address_item" href="tel:+380680686975">
              Тел: +38 (068) 068-69-75
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
