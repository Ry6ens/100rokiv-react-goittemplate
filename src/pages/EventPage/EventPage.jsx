import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Section from 'components/Shared/Section/Section';
import EventTicket from 'components/EventTicket/EventTicket';
import Text from 'components/Shared/Text/Text';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

import { basketProductsActions } from 'redux/basketProducts/basketProducts-slice';

export default function EventPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(basketProductsActions.clearBasket());
  }, [dispatch]);

  return (
    <>
      <OpenGraphHelmet
        title="100років • Звана Вечеря «Чорнозем»"
        description="Щасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю Чорнозем — вже у понеділок, 10 жовтня"
        url="https://100rokiv.netlify.app/event"
        image="https://storokiv-server.herokuapp.com/images/event.jpg"
      />
      <Section>
        <Text text="Всі квитки на Звану Вечерю 6 жовтня — продано!" />
        <Text text="Щасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю Чорнозем — вже у понеділок, 10 жовтня." />
        <Text text="До очікуваної зустрічі наш шеф приготує 7 страв з локальних продуктів, вирощених в родючій українській землі. Все, що росте у нашій землі, унікально смачне — в ній енергія наших людей, їхня любов, сила та чорнозем, подібного якому ніде немає." />
        <Text text="Доповнимо вечерю українським вином і коктейлем від Євгена." />
        <Text text="Чекаємо нашу теплу зустріч 10 жовтня о 18:30 год!" />
      </Section>

      <Section>
        <EventTicket />
      </Section>
    </>
  );
}
