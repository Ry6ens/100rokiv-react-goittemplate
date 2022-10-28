import s from './ButtonSubmit.module.scss';

export default function ButtonSubmit({text,  buttonClass = "btn"}) {
  return (
    <>
      <button className={s[buttonClass]} type="submit">
        {text}
      </button>
    </>
  );
}
