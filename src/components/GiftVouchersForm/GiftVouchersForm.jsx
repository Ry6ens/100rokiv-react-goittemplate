import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";

import { getEmailOperations } from "../../redux/email/email-operations";
import { getSheetOperations } from "../../redux/google/sheet-operations";
import { getTelegramOperations } from "../../redux/telegram/telegram-operations";

import { getEmailSuccess } from "../../redux/email/email-selectors";
import { successFalse } from "../../redux/email/email-slice";

import ButtonSubmit from "components/ButtonSubmit/ButtonSubmit";
import FormInputText from "components/FormComponents/FormInputText";
import FormInputTel from "components/FormComponents/FormInputTel";
import FormInputSelect from "components/FormComponents/FormInputSelect";

import s from "./GiftVouchersForm.module.scss";
import "./styles.scss";

export default function GiftVouchersForm() {
  const dispatch = useDispatch();
  const emailSuccess = useSelector(getEmailSuccess);

  const {
    control,
    handleSubmit,
    reset,
    formState,
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      sum: "",
    },
  });

  useEffect(() => {

    dispatch(successFalse(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        name: '',
        tel: '',
        sum: '',
      });
    }
  }, [formState, reset]);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const date = moment(new Date()).format("DD-MM-yyyy, HH:mm");
    dispatch(getEmailOperations({ ...data, date }));
    dispatch(getSheetOperations({ ...data, date }));
    dispatch(getTelegramOperations({ ...data, date }));
    reset();
  };

  return (
    <>
      {emailSuccess === true ? (
        <div className={s.successBox}>
          <p>Дякуємо за замовлення</p>
          <p className={s.successBoxText}>
            Менеджер ресторану зв'яжеться з вами найближчим часом
          </p>
        </div>
      ) : (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <FormInputSelect name="sum" control={control} label="Оберіть суму ..." required={"Обов'язкове поле"}/>
          <FormInputText name="name" control={control} label="Ім‘я того, хто дарує" type="text" required={"Обов'язкове поле"}/>
          <FormInputTel name="tel" control={control} required={"Обов'язкове поле"}/>
          <ButtonSubmit text="Подарувати" />
        </form>
      )}
    </>
  );
}
