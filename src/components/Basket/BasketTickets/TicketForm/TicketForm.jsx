import { useSelector, useDispatch } from 'react-redux';

import s from './TicketForm.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';

import { ReactComponent as CloseBtn } from 'images/svg/closeBtn.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';

import { basketTicketsActions } from 'redux/basketTickets/basketTickets-slice';

export default function BasketProductsTicket() {
  const dispatch = useDispatch();

  const products = useSelector(store => store.basketTickets.items);
  const productsTicket = products.filter(el => el.category === 'ticket');

  const deleteItem = ({ currentTarget: { id } }) => {
    const findTicketById = productsTicket.find(el => el.id === id);
    dispatch(basketTicketsActions.deleteFromBasket(findTicketById));
  };

  const handleIncrement = ({ currentTarget: { id } }) => {
    dispatch(basketTicketsActions.incrementProduct(id));
  };

  const handleDecrement = ({ currentTarget: { id } }) => {
    dispatch(basketTicketsActions.decrementProduct(id));
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
          <div className={s.quantityOverlay}>
            <button
              id={id}
              type="button"
              className={s.quantityBtn}
              onClick={handleDecrement}
            >
              <span className={s.overlay}>
                <Minus />
              </span>
            </button>
            <span className={s.quantity}>{quantity}</span>
            <button
              id={id}
              type="button"
              className={s.quantityBtn}
              onClick={handleIncrement}
            >
              <span className={s.overlay}>
                <Plus />
              </span>
            </button>
          </div>
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
