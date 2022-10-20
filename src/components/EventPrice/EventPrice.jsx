import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import s from "./EventPrice.module.scss";

import TitleH1 from "../TitleH1/TitleH1";

import { getTicketsOperations } from "../../redux/tickets/tickets-operations";

export default function EventForm() {
  const dispatch = useDispatch();
  const [ticket, setTicket] = useState({
    title: "Chernozem",
    price: 2500,
  });

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  function handleClick() {
    dispatch(getTicketsOperations({ ...ticket, id: nanoid() }));
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
            onClick={() => handleClick(ticket)}
          >
            Купити
          </button>
        )}

        <div className={s.ticketOvalsFirst}></div>
        <div className={s.ticketOvalsSecond}></div>
      </div>

      {isTabletDesktop && (
        <button className={s.btn} type="button" onClick={handleClick}>
          Купити
        </button>
      )}
    </div>
  );
}
