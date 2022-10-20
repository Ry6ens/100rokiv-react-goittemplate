import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import s from "./Footer.module.scss";
import Navigation from "../Navigation/Navigation";
import { ReactComponent as Facebook } from "../../images/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../images/svg/instagram.svg";

export default function Footer() {
  // const isTablet = useMediaQuery({ minWidth: 768 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer>
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}

      <div className={s.logo}>
        <p className={s.title}>Графік роботи:</p>
        <div className={s.schedule}>
          <p className={s.text}>понеділок - пʼятниця: 12:00 до 21:00</p>
          <p className={s.text}>субота - неділя: 10:00 до 21:00</p>
        </div>
      </div>
      <div className={s.footerBottom}>
        <p className={s.titleBottom}>© 100 років тому вперед</p>
        {isDesktop && (
          <div className={s.social}>
            <Link to="/privacy-policy" className={s.link} onClick={scrollTop}>
              Політика конфіденційності
            </Link>
            <Link to="/public-offer" className={s.link} onClick={scrollTop}>
              Публічна оферта
            </Link>
            <a
              href="https://www.facebook.com/100rokivtomuvpered"
              rel="noreferrer"
              target="_blank"
            >
              <Facebook width="30" height="30" />
            </a>
            <a
              href="https://www.instagram.com/100rokivtomuvpered"
              rel="noreferrer"
              target="_blank"
            >
              <Instagram width="30" height="30" />
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}
