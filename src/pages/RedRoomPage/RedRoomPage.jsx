import RedRoomIMG from 'images/redroom.jpeg';

import TitleH1 from 'components/TitleH1/TitleH1';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import Image from 'components/Image/Image';
import Gallery from 'components/Gallery/Gallery';
import Menu from 'components/Menu/Menu';
import ButtonLink from 'components/ButtonLink/ButtonLink';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

export default function RedRoomPage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років•Червона Зала"
        description="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності"
        url="https://100rokiv.netlify.app/redroom"
        image="https://storokiv-server.herokuapp.com/images/redroom.jpeg"
      />

      <Image src={RedRoomIMG} alt="redroom" imgClass="imgFloor" />

      <Section>
        <TitleH1 text="Червона зала" />
        <Text text="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності." />
        <Text
          text="Це чудове місце для невеликого, але дуже красивого весілля, дня народження або просто посиденьок компанії в теплій,
    камерній атмосфері."
        />
        <ButtonLink
          to="/book"
          btnClass="btnLineMargin"
          text="Забронювати столик"
        />
      </Section>

      <Menu />
      <Gallery />
    </main>
  );
}
