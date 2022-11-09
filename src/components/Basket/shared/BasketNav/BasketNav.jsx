import { NavLink } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import s from "./BasketNav.module.scss";

export default function Navigation() {
  const getClassName = ({ isActive }) => {
    return isActive ? s.activeLink : s.link;
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item} key={nanoid()}>
          <NavLink to="/basket" className={getClassName} end>
            <span className={s.labelNumber}>1</span>
            <span className={s.labelText}>Кошик</span>
          </NavLink>
        </li>
        <li className={s.item} key={nanoid()}>
          <NavLink to="delivery" className={getClassName}>
            <span className={s.labelNumber}>2</span>
            <span className={s.labelText}>Доставка</span>
          </NavLink>
        </li>
        <li className={s.item} key={nanoid()}>
          <NavLink to="checkout" className={getClassName}>
            <span className={s.labelNumber}>3</span>
            <span className={s.labelText}>Оплата</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
