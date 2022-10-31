import { Helmet } from 'react-helmet-async';

import RedRoomIMG from 'images/redroom.jpeg';

import TitleH1 from 'components/TitleH1/TitleH1';
import Text from 'components/Text/Text';
import Section from 'components/Section/Section';
import Image from 'components/Image/Image';
import Gallery from 'components/Gallery/Gallery';
import Menu from 'components/Menu/Menu';
import ButtonLink from 'components/ButtonLink/ButtonLink';

export default function RedRoomPage() {
  return (
    <main>
      <Helmet>
        {/* <!--Primary Meta Tags--> */}
        <title>100років•Червона Зала</title>
        <link rel="canonical" href="https://100rokiv.netlify.app/redroom" />

        <meta name="title" content="100років•Червона Зала" />
        <meta
          name="description"
          content="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності"
        />

        {/* <!--Open Graph / Facebook Meta Tags--> */}
        <meta property="og:title" content="100років•Червона Зала" />
        <meta
          property="og:description"
          content="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності"
        />
        <meta property="og:url" content="https://100rokiv.netlify.app/redroom" />
        <meta
          property="og:image"
          content="https://storokiv-server.herokuapp.com/images/ground.jpeg"
        />

        {/* <!--Twitter Meta Tags--> */}
        <meta name="twitter:title" content="100років•Червона Зала" />
        <meta
          name="twitter:description"
          content="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності"
        />
        <meta name="twitter:url" content="https://100rokiv.netlify.app/redroom" />
        <meta
          name="twitter:image"
          content="https://storokiv-server.herokuapp.com/images/redroom.jpeg"
        />
      </Helmet>

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
