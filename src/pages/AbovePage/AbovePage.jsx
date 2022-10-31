import AboveIMG from "images/above.jpeg";

import TitleH1 from "components/TitleH1/TitleH1";
import Text from "components/Text/Text";
import Section from "components/Section/Section";
import Image from "components/Image/Image";
import Gallery from "components/Gallery/Gallery";
import Menu from "components/Menu/Menu";
import ButtonLink from "components/ButtonLink/ButtonLink";
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';


export default function AbovePage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років • Другий поверх"
        description="Це найкраще місце для того, щоб зранку повільно снідати в проміннях яскравого сонця, а ввечері - відчути Україну на
        смак, насолоджуючись атмосферою історичних вулиць Києва"
        url="https://100rokiv.netlify.app/above"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />

      <Image src={AboveIMG} alt="aboveFloor" imgClass="imgFloor" />

      <Section>
        <TitleH1 text="Другий поверх" />
        <Text text="Піднявшись сходами, ви опинитеся в просторій світлій залі з великими вікнами." />
        <Text
          text="Це найкраще місце для того, щоб зранку повільно снідати в проміннях яскравого сонця, а ввечері - відчути Україну на
    смак, насолоджуючись атмосферою історичних вулиць Києва."
        />
        <Text
          text="Декілька раз на місяць ми проводимо тут спеціальні заходи, які розширюють ваші уявлення про українську їжу. Розумієте,
    яку дивовижну енергетику мая ця зала."
        />
        <ButtonLink to="/book" btnClass="btnLineMargin" text="Забронювати столик" />
      </Section>

      <Menu />
      <Gallery />
    </main>
  );
}
