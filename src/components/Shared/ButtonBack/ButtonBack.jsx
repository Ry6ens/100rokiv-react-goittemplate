import { Link } from 'react-router-dom';

import s from './ButtonBack.module.scss';

import { ReactComponent as IconArrowLeft } from 'images/svg/arrowLeft.svg';

export default function ButtonBack({ backLinkHref }) {
  return (
    <div className={s.btnBack}>
      <Link to={backLinkHref} className={s.overlay} >
        <IconArrowLeft className={s.iconArrowLeft} />
        <p>Назад</p>
      </Link>
    </div>
  );
}
