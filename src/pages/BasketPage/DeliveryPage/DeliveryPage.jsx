import { useSelector } from 'react-redux';

import ProductDelivery from 'components/Basket/BasketProducts/ProductDelivery/ProductDelivery';
import TicketDelivery from 'components/Basket/BasketTickets/TicketDelivery/TicketDelivery';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

export default function DeliveryPage() {
  const products = useSelector(store => store.basketProducts.items);
  const tickets = useSelector(store => store.basketTickets.items);

  return (
    <>
      <OpenGraphHelmet
        title="100років • Доставка їжі"
        description="Доставка ваших улюблених страв"
        url="https://100rokiv.netlify.app/delivery-food"
        image="https://storokiv-server.herokuapp.com/images/delivery-food.jpg"
      />
      {products.length !==0 && <ProductDelivery />}
      {tickets.length !==0 && <TicketDelivery />}
    </>
  );
}
