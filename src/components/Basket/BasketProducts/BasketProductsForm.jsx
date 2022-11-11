import ProductsForm from './ProductsForm/ProductsForm';
import ProductOrderSummary from './ProductOrderSummary/ProductOrderSummary';
import ButtonLink from 'components/Shared/ButtonLink/ButtonLink';

import TitleH1 from 'components/Shared/TitleH1/TitleH1';

export default function BasketProductsForm() {
  return (
    <>
      <TitleH1 text="Кошик" />

      <ProductsForm />
      <ProductOrderSummary />

      <ButtonLink to="delivery" text="Оформити" />
    </>
  );
}
