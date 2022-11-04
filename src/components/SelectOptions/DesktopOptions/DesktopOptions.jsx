import { useState } from 'react';

import s from './DesktopOptions.module.scss';

export default function DesktopOptions({ onClick }) {
  const [active, setActive] = useState('starters');

  const handelClick = e => {
    setActive(e.target.dataset.value);
    onClick(e.target.dataset.value);
  };

  return (
    <div className={s.list} onClick={handelClick}>
      <div className={active === 'starters' ? s.activeItem : s.item} data-value="starters">
        закуски
      </div>
      <div className={active === 'salads' ? s.activeItem : s.item} data-value="salads">салати</div>
      <div className={active === 'first-courses' ? s.activeItem : s.item} data-value="first-courses">
        перші страви
      </div>
      <div className={active === 'main-courses' ? s.activeItem : s.item} data-value="main-courses">
        основні страви
      </div>
      <div className={active === 'sweet' ? s.activeItem : s.item} data-value="sweet">
        солодке
      </div>
    </div>
  );
}
