import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from './ProductsList.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';
import Text from 'components/Text/Text';
import { getProductsByCategory } from 'redux/products/products-selectors';

export default function ProductsList() {
  const data = useSelector(getProductsByCategory);

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <ul className={s.list}>
      {data.map(({ _id, title, price, imgURL }) => (
        <li key={_id}>
          <Link to={`/delivery-food/${_id}`} onClick={scrollTop}>
            <div
              className={s.img}
              style={{
                backgroundImage: `url(${imgURL})`,
              }}
            ></div>
            <TitleH2 text={title} titleClass="titleProductsList" />
            <Text text={price} textClass="textProductsList" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
