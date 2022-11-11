import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getEmailOperations } from 'redux/email/email-operations';
import { getSheetOperations } from 'redux/google/sheet-operations';
import { getTelegramOperations } from 'redux/telegram/telegram-operations';
import { getTelegramSuccess } from 'redux/telegram/telegram-selectors';
import { telegramActions } from 'redux/telegram/telegram-slice';

import ButtonSubmit from 'components/Shared/Button/Button';
import FormInputText from 'components/FormComponents/FormInputText';
import FormInputTel from 'components/FormComponents/FormInputTel';
import FormInputSelect from 'components/FormComponents/FormInputSelect';

import s from './GiftVouchersForm.module.scss';
import './styles.scss';

export default function GiftVouchersForm() {
  const dispatch = useDispatch();
  const location = useLocation();

  const telegramSuccess = useSelector(getTelegramSuccess);

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      name: '',
      tel: '',
      sum: '',
    },
  });

  useEffect(() => {
    dispatch(telegramActions.clearTelegram());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const onSubmit = (data, e) => {
    e.preventDefault();

    dispatch(getEmailOperations(data));
    dispatch(getSheetOperations(data));
    dispatch(getTelegramOperations(data));

    reset();
  };

  return (
    <>
      {telegramSuccess === true ? (
        <div className={s.successBox}>
          <p>Дякуємо за замовлення</p>
          <p className={s.successBoxText}>
            Менеджер ресторану зв'яжеться з вами найближчим часом
          </p>
        </div>
      ) : (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <FormInputSelect
            name="sum"
            control={control}
            label="Оберіть суму ..."
            required={"Обов'язкове поле"}
          />
          <FormInputText
            name="name"
            control={control}
            label="Ім‘я того, хто дарує"
            type="text"
            required={"Обов'язкове поле"}
          />
          <FormInputTel
            name="tel"
            control={control}
            required={"Обов'язкове поле"}
          />
          <ButtonSubmit text="Подарувати" btnClass="btnMargin" />
        </form>
      )}
    </>
  );
}
