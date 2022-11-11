import s from "./Text.module.scss";

export default function Text({ textClass = "textLight", text }) {
  return (
    <>
      <p className={s[textClass]}>{text}</p>
    </>
  );
}
