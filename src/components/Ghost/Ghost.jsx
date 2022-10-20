import s from "./Ghost.module.scss";

export default function Ghost() {
  return (
    <div className={s.boxGhost}>
      <div className={s.symbol}></div>
      <div className={s.symbol}></div>
      <div className={s.symbol}></div>
      <div className={s.symbol}></div>
      <div className={s.symbol}></div>
      <div className={s.symbol}></div>

      <div className={s.boxGhostContainer}>
        <div className={s.boxGhostEyes} id="boxGhostEyes">
          <div className={s.boxEyeLeft}></div>
          <div className={s.boxEyeRight}></div>
        </div>
        <div className={s.boxGhostBottom}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={s.boxGhostShadow}></div>
    </div>
  );
}
