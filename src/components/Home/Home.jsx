import { Link } from "react-router-dom";

import s from "./Home.module.scss";

import Ground from "images/ground.jpeg";
import Above from "images/above.jpeg";
import Redroom from "images/redroom.jpeg";

import Section from "components/Shared/Section/Section";
import TitleH1 from "components/Shared/TitleH1/TitleH1";
import Text from "components/Shared/Text/Text";

export default function Home() {
  return (
    <>
      <Section>
        <TitleH1 text="100 років тому вперед" />
        <Text
          textClass="textLight"
          text="це принципово нова форма української кухні із власними суперфудами,
          дивовижними рецептами та переосмисленими традиціями."
        />
      </Section>
      <Section>
        <ul className={s.floorsList}>
          <li className={s.floorsItem}>
            <Link to="/ground" className={s.link}>
              <img className={s.img} src={Ground} alt="Перший поверх" />
              <h2 className={s.floorsTitle}>Перший поверх</h2>
            </Link>
          </li>
          <li className={s.floorsItem}>
            <Link to="/above" className={s.link}>
              <img className={s.img} src={Above} alt="Другий поверх" />
              <h2 className={s.floorsTitle}>Другий поверх</h2>
            </Link>
          </li>
          <li className={s.floorsItem}>
            <Link to="/redroom" className={s.link}>
              <img className={s.img} src={Redroom} alt="Червона зала" />
              <h2 className={s.floorsTitle}>Червона зала</h2>
            </Link>
          </li>
        </ul>
      </Section>
    </>
  );
}
