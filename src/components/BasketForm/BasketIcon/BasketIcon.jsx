import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import s from './BasketIcon.module.scss';

import { ReactComponent as BasketSVG } from 'images/svg/basket.svg';
import { ReactComponent as HryvniaSymbol } from '../../../images/svg/hryvniaSymbol.svg';

export default function Basket() {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const products = useSelector(store => store.products.items);
  const totalAmountProducts = useSelector(store => store.products.totalAmount);

  return (
    <>
      <Link to="/basket" className={s.basket}>
        {isTablet && (
          <div className={s.priceLay}>
            <HryvniaSymbol />
            <span className={s.basketSum}>
              {totalAmountProducts.toFixed(2)}
            </span>
          </div>
        )}
        <BasketSVG />
        <span className={s.basketCount}>{products.length}</span>
      </Link>
    </>
  );
}
