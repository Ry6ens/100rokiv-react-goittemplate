import Section from 'components/Section/Section';
import TitleH2 from 'components/TitleH2/TitleH2';
import Text from 'components/Text/Text';

export default function SuccessPage() {
  return (
    <main>
      <Section>
        <TitleH2
          text="Дякуємо за замовлення!"
          titleClass="titleSuccessPage"
        />
        <Text
          text="Чекайте підтвердження на електронну адресу"
          textClass="textSuccessPage"
        />
      </Section>
    </main>
  );
}
