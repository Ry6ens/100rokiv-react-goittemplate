import { useSelector, useDispatch } from 'react-redux';

import s from './BasketProductsFood.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';

import { ReactComponent as CloseBtn } from 'images/svg/closeBtn.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { ReactComponent as Minus } from 'images/svg/minus.svg';

import { productActions } from 'redux/products/products-slice';

export default function BasketProductsFood() {
  const dispatch = useDispatch();

  const products = useSelector(store => store.products.items);
  const productsFood = products.filter(el => el.category !== 'ticket');

  const deleteItem = ({ currentTarget: { id } }) => {
    const findProductById = productsFood.find(el => el.id === id);
    dispatch(productActions.deleteFromBasket(findProductById));
  };

  const handleIncrement = ({ currentTarget: { id } }) => {
    dispatch(productActions.incrementProduct(id));
  };

  const handleDecrement = ({ currentTarget: { id } }) => {
    dispatch(productActions.decrementProduct(id));
  };

  return (
    <>
      {productsFood?.map(({ id, img, price, title, quantity }) => (
        <>
          <div className={s.productForm} key={id}>
            <span className={s.closeBtn} id={id} onClick={deleteItem}>
              <CloseBtn />
            </span>
            <TitleH2 text={title} titleClass="titleBasketForm" />
            <div
              className={s.img}
              style={{
                backgroundImage: `url(${img})`,
              }}
            ></div>
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
            <p className={s.textProductPrice}>{price * quantity} грн</p>
          </div>
        </>
      ))}{' '}
    </>
  );
}
