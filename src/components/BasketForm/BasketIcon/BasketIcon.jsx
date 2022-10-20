import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import s from "./BasketIcon.module.scss";

import { ReactComponent as BasketSVG } from "images/svg/basket.svg";
import { ReactComponent as HryvniaSymbol } from "../../../images/svg/hryvniaSymbol.svg";

export default function Basket() {
  const isTablet = useMediaQuery({ minWidth: 768 });
  const tickets = useSelector((store) => store.tickets.items);

  function sumPrice() {
    let sum = 0;
    tickets.forEach((el) => (sum += el.meta.arg.price));
    return sum.toFixed(2);
  }

  console.log(sumPrice());

  return (
    <>
      <Link to="/basket" className={s.basket}>
        {isTablet && (
          <div className={s.priceLay}>
            <HryvniaSymbol />
            <span className={s.basketSum}>{sumPrice()}</span>
          </div>
        )}
        <BasketSVG />
        <span className={s.basketCount}>{tickets.length}</span>
      </Link>
    </>
  );
}
