import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import { items } from "./items";
import s from "./Navigation.module.scss";

const getClassName = ({ isActive }) => {
  return isActive ? s.activeLink : s.link;
};

export default function Navigation({ navClass }) {
  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink to={to} className={getClassName} >
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
