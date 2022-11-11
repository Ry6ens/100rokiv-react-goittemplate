import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import s from './TicketDelivery.module.scss';
import './styles.scss';

import TitleH1 from 'components/Shared/TitleH1/TitleH1';
import FormInputText from 'components/FormComponents/FormInputText';
import FormInputTel from 'components/FormComponents/FormInputTel';
import FormInputEmail from 'components/FormComponents/FormInputEmail';
import ButtonSubmit from 'components/Shared/Button/Button';
import TicketOrderSummary from '../TicketOrderSummary/TicketOrderSummary';

import { getLiqPayTicketsOperations } from 'redux/liqpay/liqpay-operations';

export default function TicketDelivery() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderItems = useSelector(store => store.basketTickets.items);
  const totalAmount = useSelector(store => store.basketTickets.totalAmount);

  const { control, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      name: '',
      tel: '',
      email: '',
      comments: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        tel: '',
        email: '',
        comments: '',
      });
    }
  }, [formState, reset]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const { name, tel, email, comments } = data;

    const descriptionOrders = orderItems.map((el, index) => {
      return `\nквиток "${el.title}" (${el.quantity}x${el.price}) = ${
        el.quantity * el.price
      };`;
    });

    dispatch(
      getLiqPayTicketsOperations({
        name: name,
        tel: tel.replace(/[+]/g, '').replace(/ /g, ''),
        email: email,
        description: descriptionOrders.join(' '),
        amount: totalAmount,
        comments: comments,
        category: "ticket",
      })
    );

    navigate('/basket/checkout');

    reset();
  };

  return (
    <>
      <TitleH1 text="Доставка електронною поштою" />

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

        <FormInputText
          name="comments"
          control={control}
          label="Якщо маєте алергію, то на які саме інгредієнти?"
          type="text"
        />

        <TicketOrderSummary basketOrderSummaryClass="overlayBasketDelivery" />
        <ButtonSubmit text="Замовити" />
      </form>
    </>
  );
}
