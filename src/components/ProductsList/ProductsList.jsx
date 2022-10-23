import { Link } from 'react-router-dom';

import s from './ProductsList.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';
import Text from 'components/Text/Text';

export default function ProductsList({ data }) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  
  return (
    <ul className={s.list}>
      {data.map(({ id, title, price, img }) => (
        <li key={id}>
          <Link to={`/delivery-food/${id}`} onClick={scrollTop}>
          <div
            className={s.img}
            style={{
              backgroundImage: `url(${img})`,
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
