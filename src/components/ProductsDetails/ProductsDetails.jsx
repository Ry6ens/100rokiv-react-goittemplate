import { useParams, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";

import products from 'assets/product';

import s from './ProductsDetails.module.scss';

import Section from 'components/Section/Section';
import Image from 'components/Image/Image';
import TitleH1 from 'components/TitleH1/TitleH1';
import Text from 'components/Text/Text';
import ButtonBack from 'components/ButtonBack/ButtonBack';

import { productActions } from 'redux/products/products-slice';

export default function ProductsDetails({ onClick }) {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();

  const backLinkHref = location.state?.from ?? '/delivery-food';

  const product = products.find(el => el.id === id);
  const { title, price, weight, img, descr, category } = product;

  const handelClick = () => {
    const text = { value: category };
    console.log(text);
    onClick(text);
  };

  function addToBasket() {
    dispatch(productActions.addToBasket({ id , title, img , price }));
  }

  return (
    <Section>
      <div className={s.overlay}>
        <ButtonBack backLinkHref={backLinkHref} onClick={handelClick} />
        <Image src={img} alt={title} imgClass="imgProductsDetails" />
        <TitleH1 text={title} titleClass="titleProductDetails" />
        <p className={s.textPrice}>{price} грн</p>
        <button className={s.btn} type="button" onClick={addToBasket}>
          Замовити
        </button>
        <Text
          text={descr}
          textClass="textProductsDetails"
        />
        <p className={s.textWeight}>Вага: {weight} г</p>
      </div>
    </Section>
  );
}
