import s from "./TitleH1.module.scss";

export default function Title({ titleClass = "title", text }) {
  return <h1 className={s[titleClass]}>{text}</h1>;
}
