import s from './Button.module.scss';

export default function Button({ text, btnClass = 'btn', type="submit", onClick }) {
  return (
    <>
      <button className={s[btnClass]} type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
}
