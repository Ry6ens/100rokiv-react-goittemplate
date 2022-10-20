import s from "./Image.module.scss";

export default function Image({ src, alt, imgClass = "img" }) {
  return <img src={src} alt={alt} className={s[imgClass]} />;
}
