import { Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import BasketNav from 'components/Basket/shared/BasketNav/BasketNav';
import BasketProductsForm from 'components/Basket/BasketProducts/BasketProductsForm';
import BasketTicketsForm from 'components/Basket/BasketTickets/BasketTicketsForm';
import Section from 'components/Section/Section';
import TitleH2 from 'components/TitleH2/TitleH2';

export default function Basket() {
  const location = useLocation();
  const products = useSelector(store => store.basketProducts.items);
  const tickets = useSelector(store => store.basketTickets.items);

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
        {products.length || tickets.length ? (
          <>
            <BasketNav />
            {products.length !== 0 && isOutlet && <BasketProductsForm />}
            {tickets.length !== 0 && isOutlet && <BasketTicketsForm />}

            <Outlet />
          </>
        ) : (
          <TitleH2
            text="Ваш кошик зараз порожній"
            titleClass="titleBasketEmpty"
          />
        )}
      </Section>
    </main>
  );
}
