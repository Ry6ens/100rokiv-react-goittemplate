import s from "./Menu.module.scss";

import MenuFoodJPG from "../../images/docs/menu-food.jpg";
import MenuFoodPDF from "../../images/docs/menu-food.pdf";
import MenuWineJPG from "../../images/docs/menu-wine.jpg";
import MenuWinePDF from "../../images/docs/menu-wine.pdf";
import MenuBarJPG from "../../images/docs/menu-bar.jpg";
import MenuBarPDF from "../../images/docs/menu-bar.pdf";

import Section from "../Section/Section";
import Image from "../Image/Image";
import TitleH2 from "../TitleH2/TitleH2";

export default function Menu() {
  return (
    <Section sectionClass="sectionMenu">
      <TitleH2 text="Меню" />
      <ul className={s.galleryMenuList}>
        <li>
          <a href={MenuFoodPDF} rel="noreferrer" target="_blank">
            <Image src={MenuFoodJPG} alt="Меню 100 років" />
          </a>
        </li>
        <li>
          <a href={MenuWinePDF} rel="noreferrer" target="_blank">
            <Image src={MenuWineJPG} alt="Винна карта 100 років" />
          </a>
        </li>
        <li>
          <a href={MenuBarPDF} rel="noreferrer" target="_blank">
            <Image src={MenuBarJPG} alt="Барна карта 100 років" />
          </a>
        </li>
      </ul>
    </Section>
  );
}
