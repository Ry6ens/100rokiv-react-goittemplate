import s from './BasketForm.module.scss';

import BasketProductsTicket from './BasketProductsTicket/BasketProductsFood/BasketProductsTicket';
import BasketProductsFood from './BasketProductsFood/BasketProductsFood';

import TitleH1 from '../TitleH1/TitleH1';

export default function BasketForm() {
  return (
    <>
      <TitleH1 text="Кошик" />

      <BasketProductsTicket />
      <BasketProductsFood />

      <button className={s.btn} type="button">
        Оформити
      </button>
    </>
  );
}
