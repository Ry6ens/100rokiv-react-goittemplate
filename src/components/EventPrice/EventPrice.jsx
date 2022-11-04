import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import s from "./EventPrice.module.scss";

import TitleH1 from "components/TitleH1/TitleH1";
import Button from "components/Button/Button";

import { basketActions } from "redux/basket/basket-slice";

export default function EventForm() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  function addToBasket() {
    dispatch(basketActions.addToBasket({ id: nanoid(), title: "Чорнозем", price: 2500, category: "ticket", time: '18:30', date: "10.10.2022", quantity: 1 }));

  }

  return (
    <div className={s.form}>
      <div className={s.ticketForm}>
        <TitleH1 text="Чорнозем" titleClass="titleEventForm" />
        <p className={s.infoData}>10-го жовтня о 18:30</p>
        <div className={s.overlayPrice}>
          <span className={s.textPrice}>2500</span>
          <span className={s.textPriceSymbol}>грн</span>
        </div>

        {isMobile && (
          <Button text="Купити" type="button" btnClass="btnEventPrice" onClick={addToBasket}/>
        )}

        <div className={s.ticketOvalsFirst}></div>
        <div className={s.ticketOvalsSecond}></div>
      </div>

      {isTabletDesktop && (
        <Button text="Купити" type="button" btnClass="btnEventPrice" onClick={addToBasket}/>
      )}
    </div>
  );
}
