import { Link } from 'react-router-dom';

import s from './ButtonBack.module.scss';

import { ReactComponent as IconArrowLeft } from 'images/svg/arrowLeft.svg'

export default function ButtonBack({backLinkHref}) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className={s.btnBack}>
      <Link to={backLinkHref} className={s.overlay} onClick={scrollTop}>
        <IconArrowLeft className={s.iconArrowLeft} />
        <p>Назад</p>
      </Link>
    </div>
  );
}
