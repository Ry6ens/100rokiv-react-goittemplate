import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import s from './BasketIcon.module.scss';

import { ReactComponent as BasketSVG } from 'images/svg/basket.svg';
import { ReactComponent as HryvniaSymbol } from 'images/svg/hryvniaSymbol.svg';

export default function Basket() {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const products = useSelector(store => store.basketProducts.items);
  const productsTotalAmount = useSelector(
    store => store.basketProducts.totalAmount
  );
  const tickets = useSelector(store => store.basketTickets.items);
  const ticketsTotalAmount = useSelector(
    store => store.basketTickets.totalAmount
  );

  return (
    <>
      {products.length !== 0 && (
        <Link to="/basket" className={s.basket}>
          {isTablet && (
            <div className={s.priceLay}>
              <HryvniaSymbol />
              <span className={s.basketSum}>
                {productsTotalAmount.toFixed(2)}
              </span>
            </div>
          )}
          <BasketSVG />
          <span className={s.basketCount}>{products.length}</span>
        </Link>
      )}
      {tickets.length !== 0 && (
        <Link to="/basket" className={s.basket}>
          {isTablet && (
            <div className={s.priceLay}>
              <HryvniaSymbol />
              <span className={s.basketSum}>
                {ticketsTotalAmount.toFixed(2)}
              </span>
            </div>
          )}
          <BasketSVG />
          <span className={s.basketCount}>{tickets.length}</span>
        </Link>
      )}
    </>
  );
}
