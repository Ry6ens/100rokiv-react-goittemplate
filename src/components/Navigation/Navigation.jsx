import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { items } from "./items";
import s from "./Navigation.module.scss";

const getClassName = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

const scrollTop = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export default function Navigation({ navClass }) {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getClassName} onClick={scrollTop} end>
        {text}
      </NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className={s[navClass]}>{elements}</ul>
    </nav>
  );
}

Navigation.propTypes = {
  navClass: PropTypes.string,
};
