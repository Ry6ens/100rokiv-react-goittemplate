import TitleH1 from "components/TitleH1/TitleH1";
import TicketForm from "./TicketForm/TicketForm"
import TicketOrderSummary from "./TicketOrderSummary/TicketOrderSummary";
import ButtonLink from "components/ButtonLink/ButtonLink";

export default function BasketTicketsForm() {
  return (
    <>
      <TitleH1 text="Кошик" />

      <TicketForm />
      <TicketOrderSummary />

      <ButtonLink to="delivery" text="Оформити" />
    </>
  );
}
