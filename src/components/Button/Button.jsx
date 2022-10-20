import { Link } from "react-router-dom";

import s from "./Button.module.scss";

export default function Button({ to, text, buttonClass = "btnBook" }) {
  return (
    <div className={s.btnLink}>
      <Link to={to} className={s[buttonClass]}>
        {text}
      </Link>
    </div>
  );
}
//  Забронювати столик
// /book
