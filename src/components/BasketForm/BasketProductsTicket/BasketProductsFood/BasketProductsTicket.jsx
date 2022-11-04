import { useSelector, useDispatch } from 'react-redux';

import s from './BasketProductsTicket.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';

import { ReactComponent as CloseBtn } from 'images/svg/closeBtn.svg';

import { basketActions } from 'redux/basket/basket-slice';

export default function BasketProductsTicket() {
  const dispatch = useDispatch();

  const products = useSelector(store => store.products.items);
  const productsTicket = products.filter(el => el.category === 'ticket');

  const deleteItem = ({ currentTarget: { id } }) => {
    const findTicketById = productsTicket.find(el => el.id === id);
    dispatch(basketActions.deleteFromBasket(findTicketById));
  };

  return (
    <>
      {productsTicket?.map(({ id, price, title, time, date }) => (
        <div className={s.ticketForm} key={id}>
          <span className={s.closeBtn} id={id} onClick={deleteItem}>
            <CloseBtn />
          </span>
          <TitleH2 text={title} titleClass="titleEventForm" />
          <p className={s.infoData}>
            {date} о {time}
          </p>
          <p className={s.textPrice}>{price} грн</p>
          <div className={s.ticketOvalsFirst}></div>
          <div className={s.ticketOvalsSecond}></div>
        </div>
      ))}
    </>
  );
}
