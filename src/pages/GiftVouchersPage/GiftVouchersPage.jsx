import Section from 'components/Shared/Section/Section';
import TitleH1 from 'components/Shared/TitleH1/TitleH1';
import Text from 'components/Shared/Text/Text';
import GiftVouchersForm from 'components/GiftVouchersForm/GiftVouchersForm';
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';

function GiftVouchersPage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років • Враження в подарунок"
        description="Ми дуже хочемо, аби ви мали нагоду подарувати новий гастрономічний досвід своїм близьким людям. З цією думкою ми зробили подарункові сертифікати"
        url="https://100rokiv.netlify.app/gift-vouchers"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />
      <Section>
        <TitleH1 text="Сертифікат" />
        <Text text="Ми дуже хочемо, аби ви мали нагоду подарувати новий гастрономічний досвід своїм близьким людям. З цією думкою ми зробили подарункові сертифікати на суми від 1000 грн." />
        <Text text="Щасливчик може завітати у наш ресторан протягом 6 місяців від дати придбання сертифікату. Зауважте, сертифікат не діє на замовлення страв і напоїв на доставку або купівлю квитків на наші події – Звану Вечерю чи Театр Їжі." />
        <Text text="Радимо не друкувати електронний сертифікат – нам достатньо переглянути його на екрані смартфону." />
      </Section>
      <Section>
        <GiftVouchersForm />
      </Section>
    </main>
  );
}

export default GiftVouchersPage;
