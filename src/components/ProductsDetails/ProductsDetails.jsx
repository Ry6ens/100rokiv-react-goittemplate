import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import s from './ProductsDetails.module.scss';

import Section from 'components/Section/Section';
import Image from 'components/Image/Image';
import TitleH1 from 'components/TitleH1/TitleH1';
import Text from 'components/Text/Text';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import Button from 'components/Button/Button';

import { basketProductsActions } from 'redux/basketProducts/basketProducts-slice';
import { getProductsByCategory } from 'redux/products/products-selectors';

export default function ProductsDetails() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const products = useSelector(getProductsByCategory)

  const backLinkHref = location.state?.from ?? '/delivery-food';

  const product = products.find(el => el._id === id);
  const { title, price, weight, imgURL, descr, quantity } = product;

  function addToBasket() {
    dispatch(basketProductsActions.addToBasket({ id , title, imgURL , price, quantity }));
  }

  return (
    <Section>
      <div className={s.overlay}>
        <ButtonBack backLinkHref={backLinkHref} />
        <Image src={imgURL} alt={title} imgClass="imgProductsDetails" />
        <TitleH1 text={title} titleClass="titleProductDetails" />
        <p className={s.textPrice}>{price} грн</p>
        <Button text="Замовити" btnClass="btnProductDetails" type="button" onClick={addToBasket} />
        <Text
          text={descr}
          textClass="textProductsDetails"
        />
        <p className={s.textWeight}>Вага: {weight} г</p>
      </div>
    </Section>
  );
}
