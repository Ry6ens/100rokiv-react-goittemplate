import AboveIMG from "../../images/above.jpeg";

import TitleH1 from "../../components/TitleH1/TitleH1";
import Text from "../../components/Text/Text";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";
import Button from "../../components/Button/Button";

export default function AbovePage() {
  return (
    <main>
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
        <Button to="/book" text="Забронювати столик" />
      </Section>

      <Menu />
      <Gallery />
    </main>
  );
}
