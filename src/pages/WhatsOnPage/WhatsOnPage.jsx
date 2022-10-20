import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";

import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import Image from "../../components/Image/Image";
import TitleH1 from "../../components/TitleH1/TitleH1";
// import Text from "../../components/Text/Text";

export default function WhatsOnPage() {
  const location = useLocation();

  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

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
          {isMobileTablet && <Image src={chornozemSQIMG} alt="poster" />}
          {isDesktop && <Image src={ChornozemFBIMG} alt="poster" />}
        </Link>

        {isOutlet && (
          <Button to="event" text="Дізнатися більше" onClick={scrollTop} />
        )}
      </Section>
      <Outlet />
    </main>
  );
}
