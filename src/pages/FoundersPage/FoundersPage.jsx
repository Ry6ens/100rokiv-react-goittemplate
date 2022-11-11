import Image from "components/Image/Image";
import Text from "components/Shared/Text/Text";
import TitleH2 from "components/Shared/TitleH2/TitleH2";
import Section from "components/Shared/Section/Section";
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

import KlopotenkoIMG from "images/people/klopotenko.jpg";
import PopereshnukIMG from "images/people/popereshnuk.jpg";

export default function FoundersPage() {

  return (
    <main>
      <OpenGraphHelmet
        title="100років • Засновники"
        description="Засновники ресторану 100 років тому вперед"
        url="https://100rokiv.netlify.app/founders"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />
      <Section>
        <Image
          src={KlopotenkoIMG}
          alt="Євген Клопотенко"
          imgClass="imgFounders"
        />
        <TitleH2 text="Євген Клопотенко" titleClass="titleTop" />
        <Text
          textClass="textFounders"
          text="Ідея «100 років тому вперед» виникла задовго до відкриття ресторану.
Декілька років ми з командою мандрували Україною та вивчали історичні літописи та літературу в пошуках автентичних рецептів української кухні. Поринувши в цю роботу, я зрозумів, що українська кухня набагато глибша та різноманітніша, ніж ми звикли думати. Вона має шалену енергетику, величну історію та неймовірний потенціал для розвитку."
        />
        <Text
          textClass="textFounders"
          text="Один за одним ми віднайшли історичні рецептури та осучаснили їх, додавши нашого бачення."
        />
        <Text
          textClass="textFounders"
          text="Ба більше, для створення абсолютно всіх страв ми використовуємо виключно українські продукти та інгредієнти."
        />
        <Text
          textClass="textFounders"
          text="Завітайте до нашого ресторану, аби відчути усю велич української кухні та назавжди розпрощатися зі стереотипами."
        />
      </Section>

      <Section>
        <Image
          src={PopereshnukIMG}
          alt="Інна Поперешнюк"
          imgClass="imgFounders"
        />
        <TitleH2 text="Інна Поперешнюк" titleClass="titleTop" />
        <Text
          textClass="textFounders"
          text="100 років тому вперед — це команда сміливців, яка взяла на себе відповідальність показати гастрономічну Україну іншою і ще жодного разу не схибила у заданому векторі."
        />
        <Text
          textClass="textFounders"
          text="Ми — це кухня на основі стародавніх рецептів. Але світ такий, що й вічне змінюється: що вчора було сьогодні — стає історією завтра, тому щодня ми тримаємо баланс між прадавніми кулінарними знахідками та надсучасними вишуканими техніками."
        />
        <Text
          textClass="textFounders"
          text="Пишаюся з того, що завдяки нашому ресторану Україна та її візитівка у вигляді їжі звучить на увесь світ свіжо, модно, актуально і несе у собі збережений у рецептах національний код."
        />
        <Text textClass="textFounders" text="З любов'ю і без стереотипів." />
      </Section>
    </main>
  );
}
