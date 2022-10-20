import Section from "../../components/Section/Section";
import EventPrice from "../../components/EventPrice/EventPrice";
import Text from "../../components/Text/Text";

export default function EventPage() {
  return (
    <>
      <Section>
        <Text text="Всі квитки на Звану Вечерю 6 жовтня — продано!" />
        <Text text="Щасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю Чорнозем — вже у понеділок, 10 жовтня." />
        <Text text="До очікуваної зустрічі наш шеф приготує 7 страв з локальних продуктів, вирощених в родючій українській землі. Все, що росте у нашій землі, унікально смачне — в ній енергія наших людей, їхня любов, сила та чорнозем, подібного якому ніде немає." />
        <Text text="Доповнимо вечерю українським вином і коктейлем від Євгена." />
        <Text text="Чекаємо нашу теплу зустріч 10 жовтня о 18:30 год!" />
      </Section>

      <Section>
        <EventPrice />
      </Section>
    </>
  );
}
