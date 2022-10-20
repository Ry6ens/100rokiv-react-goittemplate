import { Outlet, useLocation } from "react-router-dom";

import BasketNav from "../../components/BasketForm/BasketNav/BasketNav";
import BasketForm from "../../components/BasketForm/BasketForm";
import Section from "../../components/Section/Section";

export default function Basket() {
  const location = useLocation();

  let isOutlet = true;
  if (
    location.pathname === "/basket/delivery" ||
    location.pathname === "/basket/checkout"
  ) {
    isOutlet = false;
  }

  return (
    <main>
      <Section>
        <BasketNav />
        {isOutlet && <BasketForm />}

        <Outlet />
      </Section>
    </main>
  );
}
