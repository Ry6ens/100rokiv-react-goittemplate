import Section from "components/Shared/Section/Section";
import TitleH1 from "components/Shared/TitleH1/TitleH1";
import Text from "components/Shared/Text/Text";
import OpenGraphHelmet from 'components/OpenGraphHelmet/OpenGraphHelmet';


export default function PrivacyPolicyPage() {
  return (
    <main>
      <OpenGraphHelmet
        title="100років • Політика конфеденційності"
        description="Правила обробки, зберігання та захисту даних Клієнтів (надалі-Правила) визначають порядок поводження з даними користувачів сайту https://100rokiv.com.ua/"
        url="https://100rokiv.netlify.app/privacy-policy"
        image="https://storokiv-server.herokuapp.com/images/above.jpg"
      />
      <Section>
        <TitleH1 text="Політика конфіденційності" />
        <Text
          textClass="textPublicOffer"
          text="Правила обробки, зберігання та захисту даних Клієнтів (надалі-Правила) визначають порядок поводження з даними користувачів сайту https://100rokiv.com.ua/"
        />
        <Text textClass="textPublicOffer" text="ОСНОВНІ ПОЛОЖЕННЯ" />
        <Text
          textClass="textPublicOffer"
          text="Погоджуючись з цими Правилами, Користувач дає дозвіл на збір, зберігання, використання та розголошення своїх даних, (в т. ч., але не обов'язково, персональних даних), у відповідності з цими Правилами, Законом України «Про захист прав споживачів», «Про захист персональних даних», «Про захист інформації в інформаційно-телекомунікаційних системах»."
        />
        <Text
          textClass="textPublicOffer"
          text="Правила дійсні з моменту оформлення замовлення на сайті https://100rokiv.com.ua/. Збір та використання персональних даних про клієнта. Дані Користувача є інформацією з обмеженим доступом."
        />
        <Text
          textClass="textPublicOffer"
          text="Дані Користувача зберігаються в базі даних сайту https://100rokiv.com.ua/ до трьох років і обробляються за допомогою автоматизованої системи."
        />
        <Text
          textClass="textPublicOffer"
          text="Мета обробки даних Користувача - забезпечення реалізації адміністративно-правових відносин, відносин у сфері податкового і бухгалтерського обліку, реклами, інших відносин, при яких використовуються дані Користувачів."
        />
        <Text
          textClass="textPublicOffer"
          text="На сайті https://100rokiv.com.ua/ можуть збиратися, зберігатися і використовуватися наступні дані:"
        />
        <Text
          textClass="textPublicOffer"
          text="1. Адреса електронної пошти (e-mail); 2. Номер мобільного телефону; 3. Адреса; 4. Інші дані, які були надані Користувачем на сайті https://100rokiv.com.ua/."
        />
        <Text
          textClass="textPublicOffer"
          text="Користувач погоджується з тим, що передані їм дані можуть використовуватися для:"
        />
        <Text
          textClass="textPublicOffer"
          text="1. Оформленні замовлення користувачем на сайті https://100rokiv.com.ua/; 2. Надання послуг клієнту; 3. Повідомлення клієнта про послуги, новини та рекламні пропозиції за допомогою SMS, електронних повідомлень, пошти і т. д."
        />
        <Text textClass="textPublicOffer" text="РОЗГОЛОШЕННЯ ДАНИХ КЛІЄНТА" />
        <Text
          textClass="textPublicOffer"
          text="Дані користувача надаються третім особам у наступних випадках:"
        />
        <Text
          textClass="textPublicOffer"
          text="1. Отримано додаткову згоду клієнта; 2. Надання загальної інформації (статистичні дані, узагальнена інформація), яка не містить персональну інформацію і яка не ідентифікує клієнта індивідуально; 3. Надання інформації правоохоронним та іншим державним органам у відповідь на їх офіційний запит щодо кримінального розслідування або можливої протиправної діяльності."
        />
        <Text textClass="textPublicOffer" text="ЗАХИСТ ДАНИХ" />
        <Text
          textClass="textPublicOffer"
          text="https://100rokiv.com.ua/ зобов'язується вживати належні заходи безпеки для захисту від неправомірного доступу або неправомірної зміни, розкриття або знищення даних Користувача."
        />
      </Section>
    </main>
  );
}
