import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import s from './BasketDelivery.module.scss';
import './styles.scss';

import FormInputText from 'components/FormComponents/FormInputText';
import FormInputTel from 'components/FormComponents/FormInputTel';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import FormInputRadio from 'components/FormComponents/FormInputRadio';
import ButtonSubmit from 'components/ButtonSubmit/ButtonSubmit';
import BasketOrderSummary from '../BasketOrderSummary/BasketOrderSummary';

import { productActions } from 'redux/products/products-slice';

export default function BasketDelivery() {
  const dispatch = useDispatch();

  const { control, watch, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      deliveryPayment: "",
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

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    reset();
  };

  const watchDeliveryPayment = watch('deliveryPayment');

  useEffect(() => {
    dispatch(productActions.addDeliveryPrice(Number(watchDeliveryPayment)));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchDeliveryPayment]);

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <FormInputText
        name="name"
        control={control}
        label="Ваше ім‘я"
        type="text"
        required={"Обов'язкове поле"}
      />
      <FormInputTel name="tel" control={control} />
      <FormInputEmail name="email" control={control} label="Електронна пошта" />
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
              type="number"
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
      <ButtonSubmit text="Замовити" buttonClass="btnBasketDelivery" />
    </form>
  );
}
