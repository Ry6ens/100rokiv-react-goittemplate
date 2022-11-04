import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useStore, useDispatch } from 'react-redux';

import TitleH1 from 'components/TitleH1/TitleH1';
import TitleH2 from 'components/TitleH2/TitleH2';
import Section from 'components/Section/Section';
import SelectOptions from 'components/SelectOptions/SelectOptions';
import DesktopOptions from 'components/SelectOptions/DesktopOptions/DesktopOptions';
import ProductsList from 'components/ProductsList/ProductsList';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

import { getProductsByCategory } from 'redux/products/products-operations';
import { getProducts } from 'redux/products/products-operations';

export default function DeliveryFoodPage() {
  const dispatch = useDispatch();
  const store = useStore();

  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    dispatch(getProducts());
    handleFilter(store.getState().products.selectOptions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = value => {
    console.log(value)
    dispatch(getProductsByCategory(value));
  };

  return (
    <main>
      <OpenGraphHelmet
        title="100років • Доставка їжі"
        description="Доставка ваших улюблених страв"
        url="https://100rokiv.netlify.app/delivery-food"
        image="https://storokiv-server.herokuapp.com/images/delivery-food.jpg"
      />
      <TitleH1 text="100 РОКІВ ТОМУ ВПЕРЕД" />
      <TitleH2 text="ВДОМА" />
      <Section>
        {isMobileTablet && (
          <SelectOptions options="optionsMenu" onChange={handleFilter} />
        )}

        {isDesktop && <DesktopOptions onClick={handleFilter} />}
        <ProductsList onClick={handleFilter} />
      </Section>
    </main>
  );
}
