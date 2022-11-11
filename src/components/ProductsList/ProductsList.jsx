import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import s from './ProductsList.module.scss';

import TitleH2 from 'components/Shared/TitleH2/TitleH2';
import Text from 'components/Shared/Text/Text';
import { getProductsByCategory } from 'redux/products/products-selectors';

export default function ProductsList() {
  const data = useSelector(getProductsByCategory);

  return (
    <ul className={s.list}>
      {data.map(({ _id, title, price, imgURL }) => (
        <li key={_id}>
          <Link to={`/delivery-food/${_id}`} >
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
