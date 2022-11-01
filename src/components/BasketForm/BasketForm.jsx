import BasketProductsTicket from './BasketProductsTicket/BasketProductsFood/BasketProductsTicket';
import BasketProductsFood from './BasketProductsFood/BasketProductsFood';
import BasketOrderSummary from './BasketOrderSummary/BasketOrderSummary';
import ButtonLink from 'components/ButtonLink/ButtonLink'

import TitleH1 from '../TitleH1/TitleH1';

export default function BasketForm() {

  return (
    <>
      <TitleH1 text="Кошик" />

      <BasketProductsTicket />
      <BasketProductsFood />
      <BasketOrderSummary />

      <ButtonLink to="delivery" text="Оформити"  />
    </>
  );
}
