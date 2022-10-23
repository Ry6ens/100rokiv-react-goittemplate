import { useState } from 'react';
import { useDispatch, useStore } from 'react-redux';

import s from './DesktopOptions.module.scss';

import { productActions } from 'redux/products/products-slice';

export default function DesktopOptions({ onClick }) {
  const dispatch = useDispatch();
  const store = useStore();
  const [active, setActive] = useState(store.getState().products.selectOptions);

  const handelClick = e => {
    setActive(e.target.textContent);
    dispatch(productActions.addOption(e.target.textContent));
    onClick(e.target.textContent);
  };

  return (
    <div className={s.list} onClick={handelClick}>
      <div className={active === 'закуски' ? s.activeItem : s.item}>
        закуски
      </div>
      <div className={active === 'салати' ? s.activeItem : s.item}>салати</div>
      <div className={active === 'перші страви' ? s.activeItem : s.item}>
        перші страви
      </div>
      <div className={active === 'основні страви' ? s.activeItem : s.item}>
        основні страви
      </div>
      <div className={active === 'солодке' ? s.activeItem : s.item}>
        солодке
      </div>
    </div>
  );
}
