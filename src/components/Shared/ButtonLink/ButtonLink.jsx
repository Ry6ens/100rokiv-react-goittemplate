import { Link } from "react-router-dom";

import s from "./ButtonLink.module.scss";

export default function ButtonLink({ to, text, btnClass="btnLink"}) {
  return (
      <Link to={to} className={s[btnClass]}>
        {text}
      </Link>
  );
}
