import { useState } from "react";

import "./Gallery.scss";

import { items } from "./items";

import Modal from "../Modal/Modal";
import TitleH2 from "../TitleH2/TitleH2";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);

  const handleClickModal = (e) => {
    document.body.classList.add("no-scroll");

    setShowModal(e.target.dataset.image);
  };

  const elements = items.map(({ id, text, imgUrl }) => (
    <div
      key={id}
      className={text}
      data-image={imgUrl}
      onClick={handleClickModal}
    ></div>
  ));

  const getModalImage = (showModal) => {
    setShowModal(showModal);
  };

  return (
    <section className="galleryPhotos">
      <TitleH2 text="Галерея" />
      <div className="galleryList">{elements}</div>
      {showModal && (
        <Modal onClose={getModalImage}>
          <img src={showModal} alt="img" className="modalImg" />
        </Modal>
      )}
    </section>
  );
}
