import s from "./BasketForm.module.scss";

import TitleH1 from "../TitleH1/TitleH1";

export default function BasketForm() {
  return (
    <>
      <TitleH1 text="Кошик" />
      <div className={s.ticketForm}>
        <TitleH1 text="Чорнозем" titleClass="titleEventForm" />
        <p className={s.infoData}>10.10.2022 о 18:30</p>
        <div className={s.overlayPrice}>
          <span className={s.textPrice}>2500</span>
          <span className={s.textPriceSymbol}>грн</span>
        </div>
        <div className={s.ticketOvalsFirst}></div>
        <div className={s.ticketOvalsSecond}></div>
      </div>
      <button className={s.btn} type="button">
        Оформити
      </button>
    </>
  );
}
