import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';
import ProductsDetails from 'components/ProductsDetails/ProductsDetails';

export default function ProductDetailsPage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років • Доставка їжі"
        description="Доставка ваших улюблених страв"
        url="https://100rokiv.netlify.app/delivery-food/:id"
        image="https://storokiv-server.herokuapp.com/images/delivery-food.jpg"
      />
      <ProductsDetails />
    </main>
  );
}
