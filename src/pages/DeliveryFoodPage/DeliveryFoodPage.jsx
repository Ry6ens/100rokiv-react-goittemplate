import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useStore } from 'react-redux';

import TitleH1 from 'components/TitleH1/TitleH1';
import TitleH2 from 'components/TitleH2/TitleH2';
import Section from 'components/Section/Section';
import SelectOptions from 'components/SelectOptions/SelectOptions';
import DesktopOptions from 'components/SelectOptions/DesktopOptions/DesktopOptions';
import ProductsList from 'components/ProductsList/ProductsList';

import products from 'assets/product';

export default function DeliveryFoodPage() {
  const [productsData, setProductsData] = useState(products);
  const store = useStore();

  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    handleFilter(store.getState().products.selectOptions)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFilter = value => {

    if (value === 'закуски') {
      const filteredProducts = products.filter(
        ({ category }) => category === 'закуски'
      );
      setProductsData(filteredProducts);
    }

    if (value === 'салати') {
      const filteredProducts = products.filter(
        ({ category }) => category === 'салати'
      );
      setProductsData(filteredProducts);
    }

    if (value === 'перші страви') {
      const filteredProducts = products.filter(
        ({ category }) => category === 'перші страви'
      );
      setProductsData(filteredProducts);
    }

    if (value === 'основні страви') {
      const filteredProducts = products.filter(
        ({ category }) => category === 'основні страви'
      );
      setProductsData(filteredProducts);
    }

    if (value === 'солодке') {
      const filteredProducts = products.filter(
        ({ category }) => category === 'солодке'
      );
      setProductsData(filteredProducts);
    }
  };

  return (
    <main>
      <TitleH1 text="100 РОКІВ ТОМУ ВПЕРЕД" />
      <TitleH2 text="ВДОМА" />
      <Section>
        {isMobileTablet && (
          <SelectOptions
            options="optionsDelivery"
            onChange={handleFilter}
          />
        )}

        {isDesktop && <DesktopOptions onClick={handleFilter} />}
        <ProductsList data={productsData} onClick={handleFilter} />
      </Section>
    </main>
  );
}
