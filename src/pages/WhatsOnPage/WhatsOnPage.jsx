import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

import Section from "../../components/Section/Section";
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Image from "../../components/Image/Image";
import TitleH1 from "../../components/TitleH1/TitleH1";
// import Text from "../../components/Text/Text";

export default function WhatsOnPage() {
  const location = useLocation();

  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  let isOutlet = true;

  if (location.pathname === "/whats-on/event") {
    isOutlet = false;
  }

  return (
    <main>
      <Section>
        {isOutlet && <TitleH1 text="Майбутні події" titleClass="titleBottom" />}

        {/* <Text
        text="Любий гостю нашого сайту, наразі ми не плануємо проводити Звану Вечерю
        чи Театр Їжі. Майбутню подію ми обов'язково анонсуємо на наших
        платформах — слідкуйте за оновленнями!"
      /> */}

        <Link to="event" onClick={scrollTop}>
          {isMobile && <Image src={chornozemSQIMG} alt="poster" />}
          {isTabletDesktop && <Image src={ChornozemFBIMG} alt="poster" />}
        </Link>

        {isOutlet && (
          <ButtonLink to="event" text="Дізнатися більше" btnClass="btnLineMargin" onClick={scrollTop} />
        )}
      </Section>
      <Outlet />
    </main>
  );
}
