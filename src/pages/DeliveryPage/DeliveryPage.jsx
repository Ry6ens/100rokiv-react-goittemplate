import BasketDelivery from 'components/BasketForm/BasketDelivery/BasketDelivery'
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';


export default function DeliveryPage() {
  return (
    <>
     <OpenGraphHelmet
        title="100років • Доставка їжі"
        description="Доставка ваших улюблених страв"
        url="https://100rokiv.netlify.app/delivery-food"
        image="https://storokiv-server.herokuapp.com/images/delivery-food.jpg"
      />
      <BasketDelivery />
    </>
  );
}
