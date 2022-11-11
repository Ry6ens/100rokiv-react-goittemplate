import { useSelector } from 'react-redux';

import s from './TicketOrderSummary.module.scss';

import TitleH2 from 'components/Shared/TitleH2/TitleH2';

import {ReactComponent as Symbol} from 'images/svg/hryvniaSymbol.svg'

export default function TicketOrderSummary({basketOrderSummaryClass = "overlayTable"}) {
  const totalAmount = useSelector(store => store.basketTickets.totalAmount)

  return (
    <div className={s[basketOrderSummaryClass]}>
      <TitleH2 text="Разом" />
      <table className={s.table}>
        <tbody>
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
