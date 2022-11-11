import TitleH1 from "components/Shared/TitleH1/TitleH1";
import TicketForm from "./TicketForm/TicketForm"
import TicketOrderSummary from "./TicketOrderSummary/TicketOrderSummary";
import ButtonLink from "components/Shared/ButtonLink/ButtonLink";

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
