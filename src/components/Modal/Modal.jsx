import s from "./Modal.module.scss";

import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.querySelector("#modal-root");

export default function Modal({ onClose, children }) {
  const closeModal = ({ target, currentTarget, code }) => {
    if (
      target === currentTarget ||
      code === "Escape" ||
      target.nodeName === "IMG"
    ) {
      onClose(false);
      document.removeEventListener("keydown", closeModal);
      document.body.classList.remove("no-scroll");
    }
  };

  document.addEventListener("keydown", closeModal);

  return createPortal(
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}> {children}</div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func,
};
