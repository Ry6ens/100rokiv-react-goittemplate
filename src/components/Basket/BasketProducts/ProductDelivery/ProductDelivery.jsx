import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './ProductDelivery.module.scss';
import './styles.scss';

import TitleH1 from 'components/Shared/TitleH1/TitleH1';
import Text from 'components/Shared/Text/Text';
import FormInputText from 'components/FormComponents/FormInputText';
import FormInputTel from 'components/FormComponents/FormInputTel';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import FormInputRadio from 'components/FormComponents/FormInputRadio';
import ButtonSubmit from 'components/Shared/Button/Button';
import BasketOrderSummary from '../ProductOrderSummary/ProductOrderSummary';

import { basketProductsActions } from 'redux/basketProducts/basketProducts-slice';
import { getLiqPayOperations } from 'redux/liqpay/liqpay-operations';

export default function ProductDelivery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderItems = useSelector(store => store.basketProducts.items);
  const totalAmount = useSelector(store => store.basketProducts.totalAmount);

  const { control, watch, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      deliveryPayment: '',
      street: '',
      house: '',
      entrance: '',
      comments: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        tel: '',
        email: '',
        deliveryPayment: '',
        street: '',
        house: '',
        entrance: '',
        comments: '',
      });
    }
  }, [formState, reset]);

  const watchDeliveryPayment = watch('deliveryPayment')
    .replace('Самовивіз з ресторану м. Київ ', '')
    .replace('Доставка по м. Київ ', '');

  useEffect(() => {
    dispatch(
      basketProductsActions.addDeliveryPrice(Number(watchDeliveryPayment))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchDeliveryPayment]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const {
      name,
      tel,
      email,
      deliveryPayment,
      street,
      house,
      entrance,
      comments,
    } = data;

    const descriptionOrders = orderItems.map((el, index) => {
      return `\n${index + 1}. ${el.title} (${el.quantity}x${el.price}) = ${
        el.quantity * el.price
      };`;
    });

    const deliveryTypeStr = `${deliveryPayment
      .replace('м. Київ 0', '')
      .replace(' 125', '')}`;
    const deliveryPaymentStr = deliveryPayment
      .replace('Самовивіз з ресторану м. Київ ', '')
      .replace('Доставка по м. Київ ', '');

    dispatch(
      getLiqPayOperations({
        name: name,
        tel: tel.replace(/[+]/g, '').replace(/ /g, ''),
        email: email,
        deliveryType: deliveryTypeStr,
        deliveryPayment: deliveryPaymentStr,
        street: street,
        house: house,
        entrance: entrance,
        description: descriptionOrders.join(' '),
        amount: totalAmount,
        comments: comments,
      })
    );

    navigate('/basket/checkout');

    reset();
  };

  return (
    <>
      <TitleH1 text="Спосіб доставки" />

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <FormInputText
          name="name"
          control={control}
          label="Ваше ім‘я"
          type="text"
          required={"Обов'язкове поле"}
        />
        <FormInputTel name="tel" control={control} />
        <FormInputEmail
          name="email"
          control={control}
          label="Електронна пошта"
        />

        <div>
          <Text
            text="▶ Приймаємо замовлення щодня — з 12:00 до 20:00 години"
            textClass="textProductDelivery"
          />
          <Text
            text="▶ При замовленні від 700 грн безкоштовно"
            textClass="textProductDelivery"
          />
        </div>

        <FormInputRadio name="deliveryPayment" control={control} />

        {watchDeliveryPayment === '125' && (
          <>
            <FormInputText
              name="street"
              control={control}
              label="Вулиця"
              type="text"
              required={"Обов'язкове поле"}
            />
            <div className={s.overlayHouseEntrance}>
              <FormInputText
                name="house"
                control={control}
                label="Будинок"
                type="text"
                required={"Обов'язкове поле"}
              />
              <FormInputText
                name="entrance"
                control={control}
                label="Під’їзд"
                type="number"
                required={"Обов'язкове поле"}
              />
            </div>
          </>
        )}

        <FormInputText
          name="comments"
          control={control}
          label="Коментар"
          type="text"
        />

        <BasketOrderSummary basketOrderSummaryClass="overlayBasketDelivery" />
        <ButtonSubmit text="Замовити" />
      </form>
    </>
  );
}
