import GroundIMG from "../../images/ground.jpeg";

import TitleH1 from "../../components/TitleH1/TitleH1";
import Text from "../../components/Text/Text";
import Section from "../../components/Section/Section";
import Image from "../../components/Image/Image";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";
import ButtonLink from "../../components/ButtonLink/ButtonLink";

export default function GroundPage() {
  return (
    <main>
      <Image src={GroundIMG} alt="groundFloor" imgClass="imgFloor" />

      <Section>
        <TitleH1 text="Перший поверх" />
        <Text text="Входячи, ви потрапляєте до затишної, оздобленої натуральним деревом зали." />
        <Text
          text="Це найкраще місце для того, щоб насолодитися смаком України у великій компанії - друзів,
      родини або просто знайомих."
        />
        <Text
          text="Тут, до речі, знаходиться наш бар, де народжуються авторські коктейлі - унікальні напої з
      місцевих інгредієнтів.<br> Уявіть, як це чудово - спостерігати за тим, як створюється саме ваш!"
        />
        <ButtonLink to="/book" btnClass="btnLineMargin" text="Забронювати столик" />
      </Section>

      <Menu />
      <Gallery />
    </main>
  );
}
