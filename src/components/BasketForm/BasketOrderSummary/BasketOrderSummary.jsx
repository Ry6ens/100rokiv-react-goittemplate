import { useSelector } from 'react-redux';

import s from './BasketOrderSummary.module.scss';

import TitleH2 from 'components/TitleH2/TitleH2';

import {ReactComponent as Symbol} from 'images/svg/hryvniaSymbol.svg'

export default function BasketOrderSummary({basketOrderSummaryClass = "overlayTable"}) {
  const subTotal = useSelector(store => store.basket.subTotal)
  const deliveryPrice = useSelector(store => store.basket.deliveryPrice)
  const totalAmount = useSelector(store => store.basket.totalAmount)

  return (
    <div className={s[basketOrderSummaryClass]}>
      <TitleH2 text="Разом" />
      <table className={s.table}>
        <tbody>
          <tr className={s.tr}>
            <td className={s.tableText}><div>Сума</div></td>
            <td>
              <Symbol fill="#43291b"/>
              {subTotal.toFixed(2)}</td>
          </tr>

          <tr className={s.tr}>
            <td className={s.tableText}>Доставка</td>
            <td>
            <Symbol fill="#43291b"/>
              {deliveryPrice.toFixed(2)}</td>
          </tr>
          <tr className={s.tr}>
            <td className={s.tableText}>До сплати</td>
            <td>
            <Symbol fill="#43291b"/>
              {totalAmount.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
