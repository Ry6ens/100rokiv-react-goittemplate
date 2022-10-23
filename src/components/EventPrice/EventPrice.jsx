import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import s from "./EventPrice.module.scss";

import TitleH1 from "../TitleH1/TitleH1";

import { productActions } from "redux/products/products-slice";

export default function EventForm() {
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  function addToBasket() {
    dispatch(productActions.addToBasket({ id: nanoid(), title: "Чорнозем", price: 2500, category: "ticket", time: '18:30', date: "10.10.2022" }));

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
          <button
            className={s.btn}
            type="button"
            onClick={addToBasket}
          >
            Купити
          </button>
        )}

        <div className={s.ticketOvalsFirst}></div>
        <div className={s.ticketOvalsSecond}></div>
      </div>

      {isTabletDesktop && (
        <button className={s.btn} type="button" onClick={addToBasket}>
          Купити
        </button>
      )}
    </div>
  );
}
