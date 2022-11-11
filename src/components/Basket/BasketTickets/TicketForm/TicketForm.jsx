import { useSelector, useDispatch } from 'react-redux';

import s from './TicketForm.module.scss';

import TitleH2 from 'components/Shared/TitleH2/TitleH2';

import { ReactComponent as CloseBtn } from 'images/svg/closeBtn.svg';

import { basketTicketsActions } from 'redux/basketTickets/basketTickets-slice';

export default function BasketProductsTicket() {
  const dispatch = useDispatch();

  const products = useSelector(store => store.basketTickets.items);
  const productsTicket = products.filter(el => el.category === 'ticket');

  const deleteItem = ({ currentTarget: { id } }) => {
    const findTicketById = productsTicket.find(el => el.id === id);
    dispatch(basketTicketsActions.deleteFromBasket(findTicketById));
  };

  return (
    <>
      {productsTicket?.map(({ id, price, title, time, date, quantity }) => (
        <div className={s.ticketForm} key={id}>
          <span className={s.closeBtn} id={id} onClick={deleteItem}>
            <CloseBtn />
          </span>
          <TitleH2 text={title} titleClass="titleEventForm" />
          <p className={s.infoData}>
            {date} о {time}
          </p>
          <div className={s.textProductPriceOverlay}>
            <p className={s.textProductPrice}>{price * quantity} грн</p>
          </div>
          <div className={s.ticketOvalsFirst}></div>
          <div className={s.ticketOvalsSecond}></div>
        </div>
      ))}
    </>
  );
}
