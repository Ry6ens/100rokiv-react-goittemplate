import { Link } from "react-router-dom";

import s from "./ButtonLink.module.scss";

export default function ButtonLink({ to, text, btnClass="btnLink"}) {
  return (
    <button className={s[btnClass]} type="button">
      <Link to={to}>
        {text}
      </Link>
    </button>
  );
}

// export default function ButtonLink({ to, text, buttonClass = "btnBook" }) {
//   return (
//     <button className={s.btnLink}>
//       <Link to={to} className={s[buttonClass]}>
//         {text}
//       </Link>
//     </button>
//   );
// }
