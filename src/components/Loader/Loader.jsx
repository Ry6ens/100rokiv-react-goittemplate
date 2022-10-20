import { TailSpin } from "react-loader-spinner";
import s from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={s.loader}>
      <TailSpin
        height="80"
        width="80"
        color="#43291b"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
