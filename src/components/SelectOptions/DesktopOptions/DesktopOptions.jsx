import { useSelector } from 'react-redux';

import s from './DesktopOptions.module.scss';

import { getSelectedCategory } from 'redux/products/products-selectors';

export default function DesktopOptions({ onClick }) {
  const selectedCategory = useSelector(getSelectedCategory);

  const handelClick = e => {
    onClick(e.target.dataset.value);
  };

  return (
    <div className={s.list} onClick={handelClick}>
      <div
        className={selectedCategory === 'starters' ? s.activeItem : s.item}
        data-value="starters"
      >
        закуски
      </div>
      <div
        className={selectedCategory === 'salads' ? s.activeItem : s.item}
        data-value="salads"
      >
        салати
      </div>
      <div
        className={selectedCategory === 'first-courses' ? s.activeItem : s.item}
        data-value="first-courses"
      >
        перші страви
      </div>
      <div
        className={selectedCategory === 'main-courses' ? s.activeItem : s.item}
        data-value="main-courses"
      >
        основні страви
      </div>
      <div
        className={selectedCategory === 'sweet' ? s.activeItem : s.item}
        data-value="sweet"
      >
        солодке
      </div>
    </div>
  );
}
