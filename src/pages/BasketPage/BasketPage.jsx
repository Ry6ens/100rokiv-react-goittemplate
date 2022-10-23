import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BasketNav from '../../components/BasketForm/BasketNav/BasketNav';
import BasketForm from '../../components/BasketForm/BasketForm';
import Section from '../../components/Section/Section';
import TitleH2 from 'components/TitleH2/TitleH2';

export default function Basket() {
  const location = useLocation();
  const products = useSelector(store => store.products.totalQuantity);

  let isOutlet = true;
  if (
    location.pathname === '/basket/delivery' ||
    location.pathname === '/basket/checkout'
  ) {
    isOutlet = false;
  }

  return (
    <main>
      <Section>
        {products === 0 ? (
          <TitleH2 text="Ваш кошик зараз порожній" titleClass="titleBasketEmpty"/>
        ) : (
          <>
            <BasketNav />
            {isOutlet && <BasketForm />}

            <Outlet />
          </>
        )}
      </Section>
    </main>
  );
}
