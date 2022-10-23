import { useSelector } from 'react-redux';

import s from './BasketForm.module.scss';

import TitleH1 from '../TitleH1/TitleH1';
import TitleH2 from '../TitleH2/TitleH2';
import Image from 'components/Image/Image';

export default function BasketForm() {
  const products = useSelector(store => store.products.items);

  const productsTicket = products.filter(el => el.category === 'ticket');
  const productsFood = products.filter(el => el.category !== 'ticket');

  console.log(productsFood);

  return (
    <>
      <TitleH1 text="Кошик" />

      {productsTicket?.map(({ id, price, title, time, date }) => (
        <>
          <div className={s.ticketForm} key={id}>
            <TitleH2 text={title} titleClass="titleEventForm" />
            <p className={s.infoData}>
              {date} о {time}
            </p>
            <p className={s.textPrice}>{price} грн</p>
            <div className={s.ticketOvalsFirst}></div>
            <div className={s.ticketOvalsSecond}></div>
          </div>
        </>
      ))}

      {productsFood?.map(({ id, img, price, title }) => (
        <>
          <div className={s.productForm} key={id}>
            <TitleH2 text={title} titleClass="titleBasketForm" />
            <Image src={img} alt={title} imgClass="imgBasketProducts" />
            <p className={s.textProductPrice}>{price} грн</p>
          </div>
        </>
      ))}

      <button className={s.btn} type="button">
        Оформити
      </button>
    </>
  );
}
