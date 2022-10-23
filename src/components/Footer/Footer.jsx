import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';

import s from './Footer.module.scss';
import Navigation from '../Navigation/Navigation';
import { ReactComponent as Facebook } from '../../images/svg/facebook.svg';
import { ReactComponent as Instagram } from '../../images/svg/instagram.svg';

export default function Footer() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const getClassName = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
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
            <ul className={s.social}>
              <li>
                <NavLink
                  to="/privacy-policy"
                  className={getClassName}
                >
                  Політика конфіденційності
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/public-offer"
                  className={getClassName}
                >
                  Публічна оферта
                </NavLink>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/100rokivtomuvpered"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Facebook width="30" height="30" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/100rokivtomuvpered"
                  rel="noreferrer"
                  target="_blank"
                >
                  <Instagram width="30" height="30" />
                </a>
              </li>
            </ul>
        )}
      </div>
    </footer>
  );
}
